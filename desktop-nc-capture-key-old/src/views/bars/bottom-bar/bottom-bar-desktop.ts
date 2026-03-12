
import { LitElement, css, html} from 'lit'
import { customElement } from 'lit/decorators.js'
import logo from '@assets/img/logo/logo300px.webp'

@customElement('bottom-bar-desktop')
export class BottomBarDesktop extends LitElement {

    render() {
        return html`
            <div class='menu'>

                <div class='menu__home'>
                    <!-- <div>
                        <img class='logo' src="${logo}" alt="Logo" width="70">
                    </div> -->
                    <small>Video selected: none</small>
                </div>

                <!-- <hr class="l-vertical" /> -->

                <div class='menu__nav'>
                    <nav class='menu__nav--nav nav'>

                        <a class='menu__nav--nav--item item' href='/finished'>
                            <small>Status: waiting for video</small>
                        </a>
                    </nav>
                </div>

                <!-- <hr class="l-vertical" /> -->

                <div class='menu__footer'>
                    <a class='menu__nav--nav--item item' href='/finished'>
                        <small>Time converter: 0s</small>
                    </a>
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

            a {
                text-decoration: none;
                font-size: 0.8rem;
            }

            a:link {
                color: #d6d6d6;
            }

            a:visited {
                color: #d6d6d6;
                text-decoration: none;
            }

            p {
                margin: 0;
                font-size: 0.8rem;
                color: #d6d6d6;
                cursor: pointer;
            }

            .l-vertical {
                width: .5px;
                height: 1.5rem;
                background-color: #ccc;
            }

            .logo {
                border-radius: 50%;
            }

            .icon {
                width: 1.5rem;
                fill: #e1e1e1;
            }

            .ficon {
                width: 1.8rem;
                fill: #e1e1e1;
            }

            .menu {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.1rem 0.8rem;
                height: 1.2rem;
            }

            .menu__home {
                display: flex;
            }

            .menu__nav {
                display: flex;
                justify-content: space-between;
                /* justify-content: center; */
                align-items: center;  
            }

            .nav {
                display: flex;
                /* justify-content: space-between; */
                justify-content: center;
                align-items: center;
            }

            .item {
                display: flex;
                align-items: center;
                padding: .5rem;
                gap: 0.5rem;
            }

            .menu__footer {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;
                gap: 0.8rem;
            }
            
        `
    }
}