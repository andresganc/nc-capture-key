
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// PAGES
import "./page-page03-desktop";
import "./page-page03-mobile";

@customElement('index-page-page03')
export class IndexPagePage03 extends LitElement {
  render() {

    /* Desktop */
    if (window.screen.width > 1600) {
      return html`<page-page03-desktop></page-page03-desktop>`;
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
      return html`<page-page03-mobile></page-page03-mobile>`;
    }
    
    return html`Error al cargar la pagina`;
  }
}