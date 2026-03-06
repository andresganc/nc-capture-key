// Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// fn main() {
//   app_lib::run();
// }


use serde::Serialize;
use std::path::Path;
use tokio::{fs::File, io::AsyncWriteExt};
use uuid::Uuid;

#[derive(Serialize)]
struct UploadedFile {
    filename: String,
    size: u64,
}

#[tauri::command]
async fn upload_video(file_name: String, data: Vec<u8>) -> Result<UploadedFile, String> {
    let id = Uuid::new_v4().to_string();
    let save_path = format!("uploads/{}_{}", id, file_name);

    // Crear carpeta si no existe
    if !Path::new("uploads").exists() {
        tokio::fs::create_dir("uploads").await.map_err(|e| e.to_string())?;
    }

    // Guardar el archivo
    let mut file = File::create(&save_path).await.map_err(|e| e.to_string())?;
    file.write_all(&data).await.map_err(|e| e.to_string())?;

    Ok(UploadedFile {
        filename: file_name,
        size: data.len() as u64,
    })
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![upload_video]) // Registrar comando
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
