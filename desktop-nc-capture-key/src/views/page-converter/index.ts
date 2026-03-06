
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// PAGES
import "./page-converter-desktop";
import "./page-converter-mobile";

@customElement('index-page-converter')
export class IndexPageConverter extends LitElement {
  render() {

    /* Desktop */
    if (window.screen.width > 1600) {
      return html`<page-converter-desktop></page-converter-desktop>`;
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
      return html`<page-converter-mobile></page-converter-mobile>`;
    }
    
    return html`Error al cargar la pagina`;
  }
}