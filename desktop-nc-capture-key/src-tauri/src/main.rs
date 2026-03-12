// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// fn main() {
//     desktop_nc_capture_key_lib::run()
// }


use regex::Regex;
// use serialport;
use std::io::Read;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;
use tauri::{State};
use tauri::Emitter;


struct SerialState {
    running: Arc<Mutex<bool>>,
}

fn extraer_peso(texto: &str) -> Option<String> {
    let re = Regex::new(r"\d+\.\d+|\d+").unwrap();
    re.find(texto).map(|m| m.as_str().to_string())
}

#[tauri::command]
fn listar_puertos() -> Vec<String> {
    serialport::available_ports()
        .unwrap_or_default()
        .iter()
        .map(|p| p.port_name.clone())
        .collect()
}

#[tauri::command]
fn iniciar_serial(
    puerto: String,
    baudrate: u32,
    app: tauri::AppHandle,
    state: State<SerialState>,
) {
    // marcar como arrancado
    {
        let mut running = state.running.lock().unwrap();
        *running = true;
    }

    let running_clone = Arc::clone(&state.running);
    let app_clone = app.clone();

    thread::spawn(move || {
        let mut port = serialport::new(puerto, baudrate)
            .timeout(Duration::from_millis(100))
            .open()
            .expect("No se pudo abrir puerto");

        let mut buffer = vec![0; 1024];
        let mut ultimo_peso = String::new();
        let mut estabilidad = 0;

        loop {
            // comprobar si debemos salir
            {
                let running = running_clone.lock().unwrap();
                if !*running {
                    break;
                }
            }

            match port.read(buffer.as_mut_slice()) {
                Ok(bytes) => {
                    let texto = String::from_utf8_lossy(&buffer[..bytes]).to_string();
                    if let Some(peso) = extraer_peso(&texto) {
                        if peso == ultimo_peso {
                            estabilidad += 1;
                        } else {
                            estabilidad = 0;
                        }
                        ultimo_peso = peso.clone();
                        if estabilidad >= 3 {
                            app_clone.emit("peso", peso).unwrap(); // aquí usas emit
                            estabilidad = 0;
                        }
                    }
                }
                Err(_) => {}
            }
            thread::sleep(Duration::from_millis(200));
        }
    });
}

#[tauri::command]
fn detener_serial(state: State<SerialState>) {
    let mut running = state.running.lock().unwrap();
    *running = false;
}

fn main() {
    tauri::Builder::default()
        .manage(SerialState {
            running: Arc::new(Mutex::new(false)),
        })
        .invoke_handler(tauri::generate_handler![
            listar_puertos,
            iniciar_serial,
            detener_serial
        ])
        .run(tauri::generate_context!())
        .expect("error running tauri");
}
