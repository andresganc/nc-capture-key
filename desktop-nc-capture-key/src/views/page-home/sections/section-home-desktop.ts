

import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import logo from '@assets/img/logo/logo300px.webp'

@customElement('section-home-desktop')
export class SectionHomeDesktop extends LitElement {
    render() {
        return html`
            <div class="header-desk">
                <img class='header__logo' src="${logo}" alt="Logo" width="150">
                <h4 class="header-desk-title">Convert your videos with ease</h4>
                <p class="header-desk-description">
                    Our video converter allows you to effortlessly convert your videos to various formats, ensuring compatibility across all your devices. With a user-friendly interface and lightning-fast conversion speeds, you can easily transform your media files without any hassle.
                </p>
            </div>

            <div class="footer">
                <a class='menu__nav--nav--item item' href='/videos'>
                    <svg class="icon" viewBox="0 0 24 24"><title>videos</title><path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /></svg>
                    
                    <div>
                        <p>CHOOSE VIDEO TO CONVERT</p>
                    </div>
                       
                    <svg class="icon" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    
                </a>
                <!-- <p>&copy; 2024 NC Video Converter. All rights reserved.</p>
                <p>Contact us: <a href="mailto: home@nc-colombia.com">home@nc-colombia.com</a></p> -->
            </div>
        `
    }

    static styles = css`

        
        /* GENERALS */
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
            font-size: 0.9rem;
        }

        .header-desk {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem;
        }

        .header__logo {
            border-radius: 50%;
        }

        .header-desk-title {
            font-size: 1.2rem;
            margin-bottom: .5rem;
        }

        .header-desk-description {
            font-size: 1rem;
            color: #666;
            max-width: 600px;
        }

        .footer {
            display: flex;
            align-items: center;
                justify-content: center;
        }

        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .5rem;
            gap: 0.5rem;
        }

        .icon {
            width: 1.8rem;
            fill: #e1e1e1;
        }

    ` 

}