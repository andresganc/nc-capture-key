
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

                        <a class='menu__nav--nav--item item' href='/videos'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>videos</title><path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /></svg>
                            </div>
                            <div><p>VIDEOS</p></div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/converter'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>video-converter</title><path d="M13,15.5V13H7V15.5L3.5,12L7,8.5V11H13V8.5L16.5,12M18,9.5V6A1,1 0 0,0 17,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H17A1,1 0 0,0 18,18V14.5L22,18.5V5.5L18,9.5Z" /></svg>
                            </div>
                            <div><p>CONVERTER</p></div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/finished'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>video-check</title><path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5M8.93 15L6 11.8L7.24 10.56L8.93 12.26L12.76 8.43L14 9.93L8.93 15Z" /></svg>
                            </div>
                            <div><p>FINISHED</p></div>
                        </a>

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