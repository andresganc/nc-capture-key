
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { invoke } from '@tauri-apps/api/core';
import 'media-chrome';


@customElement('section-page01-desktop')
export class SectionPage01Desktop extends LitElement {

    
    render() {
        return html`
            <div class="section">
                <div class="section__header">
                    <div class='section__header--title title'>
                        <h4>Header page 01</h4>                      
                    </div>
                </div>
                
                    
                <div class="section__body body">
                    <p>Body page 01</p>
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