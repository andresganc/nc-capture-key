
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-about-desktop'

@customElement('page-about-desktop')
export class PageAboutDesktop extends LitElement {

    render() {
        return html`
                <section-about-desktop></section-about-desktop>
        `
    }
}
