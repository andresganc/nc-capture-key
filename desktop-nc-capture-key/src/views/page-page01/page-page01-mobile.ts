
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-capture-mobile'

@customElement('page-videos-mobile')
export class PageVideosMobile extends LitElement {

    render() {
        return html`
            <section-videos-mobile></section-videos-mobile>
        `
    }
}