
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-page03-mobile'

@customElement('page-page03-mobile')
export class PagePage03Mobile extends LitElement {

    render() {
        return html`
                <p>Page page03 mobile</p>
        `
    }
}