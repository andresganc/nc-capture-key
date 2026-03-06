
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('section-page03-desktop')
export class SectionPage03Desktop extends LitElement {

    render() {

        return html`
            <div>
                <div class="section__header">
                    <h4>Header section page 03</h4>
                </div>
                
                <div class="section__body">
                    <p>Body section page 03</p>    
                </div>

                <div class="section__footer">
                    <p>Footer section page 03</p>
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
                    
        `
    }      

}