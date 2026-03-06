
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { invoke } from '@tauri-apps/api/core';


@customElement('section-page01-desktop')
export class SectionPage01Desktop extends LitElement {

    
    render() {
        return html`
            <div class="section">
                <div class="section__header">
                    <div class='section__header--title title'>
                        <h4>Header section page 01</h4>                      
                    </div>
                </div>
                
                    
                <div class="section__body body">
                    <p>Body section page 01</p>
                </div>

                <div class="section__footer">
                    <p>Footer page 01</p>
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