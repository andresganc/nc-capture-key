
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-page03-desktop'

@customElement('page-page03-desktop')
export class PagePage03Desktop extends LitElement {

    render() {
        return html`
                <p>Page page03 desktop</p>
        `
    }
}