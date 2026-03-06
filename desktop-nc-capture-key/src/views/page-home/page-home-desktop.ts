
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-home-desktop'

@customElement('page-home-desktop')
export class PageHomeDesktop extends LitElement {

    render() {
        return html`
            <div>
                <section-home-desktop></section-home-desktop>
            </div>
        `
    }
}