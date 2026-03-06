
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/header/section-finished-header-desk'
import './sections/body/section-finished-body-desk'
import './sections/footer/section-finished-footer-desk'

@customElement('page-finished-desktop')
export class PageFinishedDesktop extends LitElement {

    render() {
        return html`
                <p>Page finished desktop</p>
        `
    }
}