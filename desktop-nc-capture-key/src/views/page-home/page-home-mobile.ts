
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-home-mobile'

@customElement('page-home-mobile')
export class PageHomeMobile extends LitElement {

    render() {
        return html`
                <section-home-mobile></section-home-mobile>
        `
    }
}