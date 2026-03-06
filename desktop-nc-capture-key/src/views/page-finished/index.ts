
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// PAGES
import "./page-finished-desktop";
import "./page-finished-mobile";

@customElement('index-page-finished')
export class IndexPageFinished extends LitElement {
  render() {

    /* Desktop */
    if (window.screen.width > 1600) {
      return html`<page-finished-desktop></page-finished-desktop>`;
    }

    // /* Laptop */
    // if (window.screen.width > 1024 && window.screen.width <= 1600){
    //   return html`<section-home-laptop></section-home-laptop>`;
    // }

    // /* Tablet */
    // if (window.screen.width > 500 && window.screen.width <= 1024) {
    //   return html`<section-home-tablet></section-home-tablet>`;
    // }

    /* Mobile */
    if (window.screen.width <= 500) {
      return html`<page-finished-mobile></page-finished-mobile>`;
    }
    
    return html`Error al cargar la pagina`;
  }
}