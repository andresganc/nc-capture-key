
import { LitElement, css, html} from 'lit'
import { customElement } from 'lit/decorators.js'
import logo from '@assets/img/logo/logo300px.webp'

@customElement('vertical-menu')
export class VerticalMenu extends LitElement {

    render() {
        return html`
            <div class='menu'>

                <div class='menu__home'>
                    <div>
                        <img class='logo' src="${logo}" alt="Logo" width="70">
                    </div>
                    <div>
                        <h3>NC VIDEO CONVERTER</h3>
                    </div>
                    <div>
                        <p>version: 0.1 beta</p>
                    </div>
                </div>

                <div class='menu__nav'>
                    <nav class='menu__nav--nav'>
                        <a class='menu__nav--nav--item item' href='/'>
                            <div class='menu__nav--nav--item--cicon c-icon'>
                                <svg class="icon" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                            </div>
                            <div class='menu__nav--nav--item--ctitle c-title'><p>HOME</p></div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/page01'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>
                            </div>
                            <div><p>SETUP CAPTURE</p></div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/page02'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>power-standby</title><path d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z" /></svg>
                            </div>
                            <div><p>START</p></div>
                        </a>

                        <!-- <a class='menu__nav--nav--item item' href='/page03'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>video-check</title><path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5M8.93 15L6 11.8L7.24 10.56L8.93 12.26L12.76 8.43L14 9.93L8.93 15Z" /></svg>
                            </div>
                            <div><p>PAGE03</p></div>
                        </a> -->

                        <a class='menu__nav--nav--item item' href='/about'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>about</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                            </div>
                            <div><p>ABOUT</p></div>
                        </a>
                    </nav>
                </div>

                <div class='menu__footer'>
                    <a class='menu__footer--item fitem'>
                        <div>
                            <svg class="ficon" viewBox="0 0 24 24"><title>Notifications</title><path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" /></svg>
                        </div>
                        <!-- <div><small>Notifications</small></div> -->
                    </a>

                    <a class='menu__footer--item fitem'>
                        <div>
                            <svg class="ficon" viewBox="0 0 24 24"><title>Status</title><path d="M8,2H16V22H8V2M10,4V7H14V4H10Z" /></svg>
                        </div>
                        <!-- <div><small>Status</small></div> -->
                    </a>

                    <a class='menu__footer--item fitem'>
                        <div>
                            <svg class="ficon" viewBox="0 0 24 24"><title>Help</title><path d="M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" /></svg>
                        </div>
                        <!-- <div><small>Help</small></div> -->
                    </a>
                </div>

            </div>
            
        `
    }

    static get styles() {
        return css`
            :host {
                margin: 0 auto;
                padding: .5rem;
                text-align: center;
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

            .logo {
                border-radius: 50%;
            }

            .icon {
                width: 1.8rem;
                fill: #e1e1e1;
            }

            .ficon {
                width: 1.5rem;
                fill: #e1e1e1;
            }

            .menu {
                display: grid;
                justify-content: space-between;
                align-items: center;
                padding: .5rem;
                gap: 1.5rem;
            }

            .menu__title {
                display: inline-block
            }

            .menu__nav {
                display: inline-block 
            }

            .menu__nav--nav {
                display: inline-block;
                justify-content: space-between;
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