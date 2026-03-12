
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import "./page-about-desktop";
import "./page-about-mobile";

@customElement('index-page-about')
export class IndexPageAbout extends LitElement {
  render() {

    /* Desktop */
    if (window.screen.width > 1600) {
      return html`<page-about-desktop></page-about-desktop>`;
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
      return html`<page-about-mobile></page-about-mobile>`;
    }
    
    return html`Error al cargar la pagina`;
  }
}