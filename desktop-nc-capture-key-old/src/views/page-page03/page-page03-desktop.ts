
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-page03-desktop'

@customElement('page-page03-desktop')
export class PagePage03Desktop extends LitElement {

    render() {
        return html`
                <section-page03-desktop></section-page03-desktop>
        `
    }
}