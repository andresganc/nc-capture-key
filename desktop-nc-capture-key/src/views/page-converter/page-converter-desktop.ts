
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-converter-desktop'

@customElement('page-converter-desktop')
export class PageConverterDesktop extends LitElement {

    render() {
        return html`
            <section-converter-desktop></section-converter-desktop>
        `
    }
}