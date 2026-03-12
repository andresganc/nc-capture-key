
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-page02-desktop'

@customElement('page-page02-desktop')
export class PagePage02Desktop extends LitElement {

    render() {
        return html`
            <section-page02-desktop></section-page02-desktop>
        `
    }
}