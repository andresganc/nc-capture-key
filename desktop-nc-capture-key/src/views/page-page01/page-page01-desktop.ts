
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-page01-desktop'

@customElement('page-page01-desktop')
export class PagePage01Desktop extends LitElement {

    render() {
        return html`
            <section-page01-desktop></section-page-desktop>
        `
    }
}