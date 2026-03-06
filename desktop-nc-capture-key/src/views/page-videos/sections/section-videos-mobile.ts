
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('section-videos-mobile')
export class SectionVideosMobile extends LitElement {

    render() {
        return html`
                <div class="header">
                    <div class="header-navleft">
                        <a class='menu__footer--item fitem'>
                            <div>
                                <svg class="ficon" viewBox="0 0 24 24"><title>Notifications</title><path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" /></svg>
                            </div>
                            <!-- <div><small>Notifications</small></div> -->
                        </a>
                    </div>
                    
                    <div class="header-navright">

                    </div>

                    <div>

                    </div>
                </div>
        `
    }
}