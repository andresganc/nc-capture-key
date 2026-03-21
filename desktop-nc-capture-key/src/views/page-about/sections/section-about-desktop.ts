
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('section-about-desktop')
export class SectionAboutDesktop extends LitElement {

    render() {
        return html`
            <div>
                <h4>ABOUT</h4>
                <p>NC Capture Key is a capture the case application for Linux, Mac & Windows.</p>
                
                <p>License: MIT</p>

                <br>
                
                <p>Developers</p>

                <div>
                    <p>Name: Andres Giraldo</p>
                    <p>Country: Colombia</p>
                </div>

                <br>

                <div>
                    <p>Company: Newsoft Computer</p>
                    <p>Web: www.nc-colombia.com </p>
                </div>
            </div>
        `;
    }
}