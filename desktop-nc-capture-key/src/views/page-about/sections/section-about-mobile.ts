
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('section-about-mobile')
export class SectionAboutMobile extends LitElement {

    render() {
        return html`
            <div>
                <h4>ABOUT</h4>
                <p>This is a video converter application built with Electron and Lit.</p>
                <p>It allows you to convert videos to different formats using FFmpeg.</p>
            </div>
        `;
    }
}