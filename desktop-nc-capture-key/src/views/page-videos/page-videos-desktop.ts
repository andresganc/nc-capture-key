
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-videos-desktop'

@customElement('page-videos-desktop')
export class PageVideosDesktop extends LitElement {

    render() {
        return html`
            <section-videos-desktop></section-videos-desktop>
        `
    }
}