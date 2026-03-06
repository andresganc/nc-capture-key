
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { useVideoStore } from '@contexts/store-video-seleted';

@customElement('section-converter-desktop')
export class SectionConverterDesktop extends LitElement {

    @state()
    selectedVideo = useVideoStore.getState().selectedVideo;

    unsubscribe?: () => void;

    connectedCallback() {
        super.connectedCallback();

        this.unsubscribe = useVideoStore.subscribe((state) => {
        this.selectedVideo = state.selectedVideo;
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
    }

    render() {

        if (!this.selectedVideo) {
            return html`<p>No hay video seleccionado</p>`;
        }

        return html`
            <div>
                <div>
                    <h4>VIDEO SELECTED</h4>
                </div>

                <!-- <div>
                    <p><strong>Nombre:</strong> ${this.selectedVideo.name}</p>
                    <p><strong>Ruta:</strong> ${this.selectedVideo.path}</p>
                    <p><strong>Tipo:</strong> ${this.selectedVideo.type}</p>
                    <p><strong>Tamaño:</strong> ${(this.selectedVideo.size / 1024 / 1024).toFixed(2)} MB</p>
                </div> -->
                
                <div class="section__footer--infovideoselected info-video-selected">
                        <div class="video-info">
                            <p>Nombre: ${this.selectedVideo.name}</p>
                        </div>
                        <div class="video-info">
                            <p>Tamaño: ${(this.selectedVideo.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <div class="video-info">
                            <p>Formato: ${this.selectedVideo.type}</p>
                        </div>
                        <div class="video-info">
                            <p>Ultima modificación: ${new Date(this.selectedVideo.size).toLocaleDateString()}</p>
                        </div>
                        <div class="video-info">
                            <p>Ruta: ${this.selectedVideo.path}</p>
                        </div>
                </div>

                <div class="section__footer--infovideoconverter info-video-converter">
                    <div class="video-info">
                        <label for="paises">Container:</label>
                        <select id="container-select" class="select-estilo" name='Select container' required>
                        <option value="" disabled selected>Select a container ...</option>
                        <option value="mp4">MP4</option>
                        <option value="mov">MOV</option>
                        <option value="mkv">MKV</option>
                        <option value="avi">AVI</option>
                        <option value="webm">WebM</option>
                        </select>
                    </div>
                    <div class="video-info">
                        <p>Tamaño: </p>
                    </div>
                    <div class="video-info">
                        <p>Formato: </p>
                    </div>
                    <div class="video-info">
                        <p>Ultima modificación: </p>
                    </div>
                    <div class="video-info">
                        <p>Ruta: ${this.selectedVideo.path}</p>
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

            /* LIST BOX */
            .select-estilo {
                padding: 8px;
                border-radius: 5px;
                border: 1px solid #ccc;
                background-color: #f9f9f9;
                cursor: pointer;
            }
    `}      

}