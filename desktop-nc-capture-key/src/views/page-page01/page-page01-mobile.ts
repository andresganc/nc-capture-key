
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-page01-mobile'

@customElement('page-page01-mobile')
export class PagePage01Mobile extends LitElement {

    render() {
        return html`
            <section-page01-mobile></section-page01-mobile>
        `
    }
}