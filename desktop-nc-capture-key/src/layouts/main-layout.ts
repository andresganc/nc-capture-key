
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// BARS
import '@/views/bars/top-bar/top-bar-desktop'
import '@views/bars/bottom-bar/bottom-bar-desktop'

// MENUS
import '@/views/menus/vertical-menu/vertical-menu-desktop'

// PAGES
import '@views/page-home/index'
import '@views/page-videos/index'
import '@views/page-converter/index'
import '@views/page-finished/index'
import '@views/page-about/index'

@customElement('main-layout')
export class MainLayout extends LitElement {

    @property({ type: String })
    main = "home";

    renderMain() {
        switch (this.main) {
        case 'videos':
            return html`<index-page-videos></index-page-videos>`;
        case 'converter':
            return html`<index-page-converter></index-page-converter>`;
        case 'finished':
            return html`<index-page-finished></index-page-finished>`;
        case 'about':
            return html`<index-page-about></index-page-about>`;
        case 'home':
        default:
            return html`<index-page-home></index-page-home>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__topbar topbar'>
                    <top-bar-desktop></top-bar-desktop>
                </div>
                
                <main class='layout__main main'>
                    <div class='layout__main--nav nav'>
                        <vertical-menu></vertical-menu>
                    </div>
                    <div class='layout__main--content content'>
                        ${this.renderMain()}
                    </div>
                </main>
                
                <div class='layout__bottombar bottombar'>
                    <bottom-bar-desktop></bottom-bar-desktop>
                </div>
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                margin: 0;
                padding: 0;
            }

            .layout {
                gap: 1rem;
                border-style: solid;
                border-width: 0.1rem;
                border-radius: 1rem;
                border-color: #424242;
                padding: 1rem 2.5rem;
            }

            .topbar {
                background-color: #424242;
                border-radius: .5rem;
                margin: .5rem 0;
                padding: .5rem;
                
            }

            .main {
                display: flex;
                border-radius: .5rem;
                padding: .5rem;
                gap: 1rem;
            }

            .content {
                border-radius: 1rem;
                padding: 0 1.5rem;
                background-color: #424242;
            }

            .bottombar {
                background-color: #424242;
                border-radius: .5rem;
                margin: .5rem 0;
                padding: .5rem;
            }


        `
    }
}
