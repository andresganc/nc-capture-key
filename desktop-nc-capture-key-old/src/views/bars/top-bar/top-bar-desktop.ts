
import { LitElement, css, html} from 'lit'
import { customElement } from 'lit/decorators.js'
import logo from '@assets/img/logo/logo300px.webp'

@customElement('top-bar-desktop')
export class TopBarDesktop extends LitElement {

    render() {
        return html`
            <div class='menu'>

                <div class='menu__home'>
                    <!-- <div>
                        <img class='logo' src="${logo}" alt="Logo" width="70">
                    </div> -->
                    <div>
                        <h3>NC</h3>
                    </div>
                </div>

                <div class='menu__nav'>
                    <nav class='menu__nav--nav nav'>

                        <a class='menu__nav--nav--item item' href='/finished'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>gift</title><path d="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/about'>
                            <div>
                                <!-- <svg class="icon" viewBox="0 0 24 24"><title>brightness-6</title><path d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" /></svg> -->
                                <svg class="icon" viewBox="0 0 24 24"><title>theme-light-dark</title><path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/about'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                            </div>
                        </a>
                    </nav>

                    <hr class="l-vertical" />

                    <div class='menu__footer'>
                        <a class='menu__footer--item fitem'>
                            <div>
                                <svg class="ficon" viewBox="0 0 24 24"><title>responsive</title><path d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__footer--item fitem'>
                            <div>
                                <svg class="ficon" viewBox="0 0 24 24"><title>close-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>
                            </div>
                        </a>
                    </div>

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
                width: 1px;
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
                width: 1.7rem;
                fill: #e1e1e1;
            }

            .menu {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .8rem;
                height: 1.3rem;
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