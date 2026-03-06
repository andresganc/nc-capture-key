
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { useVideoStore } from '@contexts/store-video-seleted';
import { invoke } from '@tauri-apps/api/core';
import 'media-chrome';

interface VideoFile {
  file: File;
  url: string;
//   filename: string;
//   size: number;
//   mime: string;
}


@customElement('section-videos-desktop')
export class SectionVideosDesktop extends LitElement {

    @state() videos: VideoFile[] = [];

    handleFolderSelect(e: Event) {

        // ADD FILE TO FRONTEND
        const input = e.target as HTMLInputElement;
        if (!input.files || input.files.length === 0) return;

        const videoFiles = Array.from(input.files).filter(f => f.type.startsWith('video/'));

        this.videos = videoFiles.map(file => ({
            file,
            url: URL.createObjectURL(file),
        }));

        const file = videoFiles[0];
        if (!file) return;

        // ADD STATES TO STORE VIDEO SELETED
        useVideoStore.getState().setSelectedVideo({
            name: file.name,
            path: (file as any).path ?? '',
            type: file.type,
            size: file.size,
        });

        // navegar a convertidor
        window.location.hash = '#/converter';

    }

    // BACKEND UPLOAD FILES TO API REST 
    // async uploadFiles() {

    //     // ADD FILE TO BACKEND
    //     const formData = new FormData();
    //     this.videos.forEach(v => {
    //     formData.append('videos', v.file);
    //     });

    //     const res = await fetch('http://localhost:3000/upload', {
    //     method: 'POST',
    //     body: formData,
    //     });

    //     const result = await res.json();
    //     console.log('📦 Backend recibió:', result);

    // }


    // BACKEND UPLOAD FILES TO USING TAURI
    async handleUpload(event: Event) {
      const input = event.target as HTMLInputElement;
      if (!input.files || input.files.length === 0) return;

      const file = input.files[0];
    
      // Convertir archivo a un array de bytes (Uint8Array)
      const arrayBuffer = await file.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);

      try {
        const response = await invoke('upload_video', { 
          fileName: file.name, 
          data: Array.from(data) // Enviamos los bytes al backend
        });
        console.log("Archivo guardado:", response);
      } catch (error) {
        console.error("Error al subir:", error);
      }
    }

    
    render() {
        return html`
            <div class="section">
                <div class="section__header">
                    <div class='section__header--title title'>
                        <h4>Search video</h4>                      
                    </div>

                    <div class='section__header--actions actions'>
                        <div class='menu__footer--item fitem'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>folder-search</title><path d="M16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12M16.5,14A2.5,2.5 0 0,0 14,16.5A2.5,2.5 0 0,0 16.5,19A2.5,2.5 0 0,0 19,16.5A2.5,2.5 0 0,0 16.5,14M9,4L11,6H19A2,2 0 0,1 21,8V11.81C19.83,10.69 18.25,10 16.5,10A6.5,6.5 0 0,0 10,16.5C10,17.79 10.37,19 11,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H9Z" /></svg>
                            </div>
                        </div>

                        <div>
                            <input class='search-input' type="file" @change=${(e: Event) => this.handleFolderSelect(e)} placeholder="Search folder videos..." />
                            <!-- <input class='search-input' type="file" @change=${this.handleFolderSelect} placeholder="Search folder videos..." /> -->
                            <!-- <input class='search-input' type="file" webkitdirectory multiple @change=${this.handleFolderSelect} placeholder="Search folder videos..." /> -->
                        </div>
                    </div>
                    
                </div>
                
                    
                <div class="section__body body">
                    <!-- <table>
                        <thead>
                            <tr>
                                <th>Vista previa</th>
                                <th>Nombre</th>
                                <th>Tamaño (MB)</th>
                                <th>Formato</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${this.videos.map(v => html`
                                <tr>
                                    <td>
                                        <video src=${v.url} muted></video>
                                    </td>
                                    <td>${v.file.name}</td>
                                    <td>${(v.file.size / 1024 / 1024).toFixed(2)}</td>
                                    <td>${v.file.type}</td>
                                </tr>
                            `)}
                        </tbody>
                        
                    </table> -->

                    <media-controller>
                        ${this.videos.map(v => html`
                            <video
                                slot="media"
                                src=${v.url} >
                            </video>
                        `)}
                        <media-control-bar>
                            <media-play-button></media-play-button>
                            <media-mute-button></media-mute-button>
                            <media-volume-range></media-volume-range>
                            <media-time-range></media-time-range>
                            <media-pip-button></media-pip-button>
                            <media-fullscreen-button></media-fullscreen-button>
                        </media-control-bar>
                    </media-controller>


                </div>

                <div class="section__footer">
                    <div class="section__footer--infoleft infoleft">
                        ${this.videos.map(v => html`
                            <div class="video-info">
                                <p>Nombre: </p> <p>${v.file.name}</p>
                            </div>
                            <div class="video-info">
                                <p>Tamaño: </p> <p>${(v.file.size / 1024 / 1024).toFixed(2)}</p>
                            </div>
                            <div class="video-info">
                                <p>Formato: </p> <p>${v.file.type}</p>
                            </div>
                            <div class="video-info">
                                <p>Ultima modificación: </p> <p>${new Date(v.file.lastModified).toLocaleDateString()}</p>
                            </div>
                        `)}
                    </div>

                    <hr class="l-vertical" />

                    <div class="section__footer--inforight inforight">
                        <div>
                            <a class='a-next-converter' href='/converter' @click=${this.uploadFiles} >

                                <svg class="icon" viewBox="0 0 24 24"><title>video-plus</title><path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z" /></svg>
                                
                                <p>SELECT TO CONVERT</p>
                                
                                <svg class="icon" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        `
    }

    static get styles() {
            return css`
                :host {
                    margin: 0;
                    padding: 0;
                }

                /* GENERALES */
                a {
                    text-decoration: none;
                    font-size: 0.8rem;
                }

                a:link {
                    color: #d6d6d6;
                }

                a:visited {
                    color: #d6d6d6;
                    text-decoration: none;
                }

                p {
                    font-size: 0.9rem;
                }

                .icon {
                    width: 1.5rem;
                    fill: #e1e1e1;
                }

                .section {
                    display: grid;
                    gap: 1rem;
                }

                .l-vertical {
                    width: .2px;
                    height: 3rem;
                    background-color: #ccc;
                }


                /* HEADER */
                .section__header {
                    display: block;
                    justify-content: center;
                    align-items: center;
                    text-align: center; 
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                }

                .search-input {
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    border: none;
                    background-color: #242424;
                    color: #e1e1e1;
                }

                /* BODY */
                .section__body {
                    display: block;
                    justify-content: center;
                    align-items: center;
                    text-align: center; 
                    width: 45rem;
                    height: 20rem;
                    padding: 1rem;

                    border-style: solid;
                    border-width: 0.1rem;
                    border-radius: 1rem;
                    border-color: #242424;
                }

                /* TABLE */
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    font-size: 0.9rem;
                    padding: 5px;
                    border-bottom: 1px solid #ccc;
                }
                video {
                    width: 120px;
                }

                /* VIDEO PLAYER */
                media-controller {
                    width: 100%;
                    height: 100%;
                    border-radius: .5rem;
                }

                video {
                    width: 100%;
                    height: 100%;
                }

                /* FOOTER */
                .section__footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: .3rem 1rem;
                    gap: 0.5rem;

                    border-style: solid;
                    border-width: 0.1rem;
                    border-radius: 1rem;
                    border-color: #242424;
                }

                .infoleft {
                    display: grid;
                    /* background-color: yellow; */
                }

                .inforight {
                    text-align: left;
                    /* background-color: violet; */
                }

                .video-info {
                    display: flex;
                    gap: 1rem;
                }

                .a-next-converter{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: .5rem;
                    gap: 0.5rem;

                    /* display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0 .5rem;
                    border-radius: 0.5rem;
                    background-color: #242424;
                    color: #e1e1e1;
                    text-decoration: none; */
                }

            `
    }
}