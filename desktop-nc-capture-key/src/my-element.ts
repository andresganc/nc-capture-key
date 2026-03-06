import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// ROUTER
import '@router/router'

@customElement('my-element')
export class MyElement extends LitElement {


  render() {
    return html`
      <div>
        <main-router></main-router>
      </div>
    `
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
