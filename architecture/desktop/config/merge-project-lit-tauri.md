
Arquitectura final (lo que vamos a crear)
my-tauri-lit-app/
├── src/              ← Frontend (Lit + Vite)
│   ├── main.ts
│   └── components/
├── index.html
├── vite.config.ts
├── package.json
│
├── src-tauri/        ← Backend (Rust + Tauri)
│   ├── src/
│   │   └── main.rs
│   └── tauri.conf.json

👉 Lit = UI
👉 Rust = backend local (FFmpeg luego)

1️⃣ Requisitos
Instala Rust
curl https://sh.rustup.rs -sSf | sh
Dependencias de Tauri (Linux)
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
2️⃣ Crear proyecto Lit con Vite
npm create vite@latest my-tauri-lit-app

Selecciona:

✔ Framework: Lit
✔ Variant: TypeScript

Entra al proyecto:

cd my-tauri-lit-app
npm install

Prueba Lit:

npm run dev
3️⃣ Añadir Tauri al proyecto

Desde la raíz:

npm install --save-dev @tauri-apps/cli

Inicializa Tauri:

npx tauri init

Responde así:

✔ App name: My Tauri Lit App
✔ Window title: My Tauri Lit App
✔ Web assets: dist
✔ Dev server URL: http://localhost:5173
✔ Frontend build command: npm run build
✔ Frontend dev command: npm run dev

👉 Esto crea la carpeta src-tauri/

4️⃣ Configurar Vite para Tauri

Edita vite.config.ts:

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
5️⃣ Probar Tauri + Lit juntos 🚀

Ejecuta:

npm run tauri dev

✔ Se abre una ventana nativa
✔ Tu app Lit corre dentro
✔ Backend Rust listo

6️⃣ Comunicación Lit ↔ Rust (ejemplo básico)
Rust (src-tauri/src/main.rs)
#[tauri::command]
fn greet(name: String) -> String {
    format!("Hola, {} desde Rust 👋", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error running tauri app");
}
Lit (src/main.ts)
import { invoke } from '@tauri-apps/api/core';

const result = await invoke<string>('greet', { name: 'Andres' });
console.log(result);

👉 Esto ya es comunicación real frontend ↔ backend.

7️⃣ Scripts útiles

En package.json:

{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "tauri": "tauri"
  }
}
🔥 Qué tienes ahora

✅ Lit moderno
✅ Tauri funcionando
✅ Rust listo
✅ Comunicación estable
✅ Base perfecta para FFmpeg

🚀 Próximos pasos recomendados

Si quieres, seguimos con:

🎞 Integrar FFmpeg en Rust

📁 Selector de carpetas nativo

📊 Tabla de videos

⚙️ Jobs de conversión

📦 Build .AppImage / .exe