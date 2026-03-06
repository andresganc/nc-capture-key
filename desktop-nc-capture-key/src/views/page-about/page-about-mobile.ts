
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-about-mobile'

@customElement('page-about-mobile')
export class PageAboutMobile extends LitElement {

    render() {
        return html`
                <section-about-mobile></section-about-mobile>
        `
    }
}