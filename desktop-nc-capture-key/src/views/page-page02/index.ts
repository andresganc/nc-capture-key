
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// PAGES
import "./page-page02-desktop";
import "./page-page02-mobile";

@customElement('index-page-page02')
export class IndexPagePage02 extends LitElement {
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