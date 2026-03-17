
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { listen } from "@tauri-apps/api/event";
import { invoke } from '@tauri-apps/api/core';
// import { invoke } from "@tauri-apps/api/tauri";

@customElement('section-page01-desktop')
export class SectionPage01Desktop extends LitElement {

    @state() puertos:string[]=[]
    @state() puerto=""

    @state() peso=""
    @state() tecla="F2"

    connectedCallback(){
        super.connectedCallback()
        this.cargarPuertos()
        this.escucharPeso()
        this.escucharTecla()
    }

    async cargarPuertos(){
        this.puertos=await invoke("listar_puertos")

        if(this.puertos.length>0)
        this.puerto=this.puertos[0]
    }

    async escucharPeso(){
        await listen("peso",(event:any)=>{

        this.peso=event.payload

        this.insertarPeso(event.payload)

        })
    }

    insertarPeso(peso:string){
        const input=document.activeElement as HTMLInputElement

        if(input){

        input.value=peso
        input.dispatchEvent(new Event("input"))

        }
    }

    async escucharTecla(){
        window.addEventListener("keydown",(e)=>{

        if(e.key===this.tecla){

        this.iniciar()

        }

        })
    }

    async iniciar(){
        await invoke("iniciar_serial",{
        puerto:this.puerto,
        baudrate:9600
        })

    }

    async parar(){
        await invoke("detener_serial")
    }

    

    render(){

    return html`

        <h3>SETUP CAPTURE</h3>

        <div>
            <p>Port: </p> 

            <select @change=${(e:any)=>this.puerto=e.target.value}>
                ${this.puertos.map(p=>html`
                <option value=${p}>${p}</option>
                `)}
            </select>
        </div>

        <div>
            <p>Activation key: </p>
            <input .value=${this.tecla} @input=${(e:any)=>this.tecla=e.target.value} disabled/>
        </div>

        <div>
            <p>Stable weight: ${this.peso}</p>
        </div>

        <div>
            <button class='start' @click=${this.iniciar}>
                <p class='text-start'>START</p>
            </button>

            <button class='stop' @click=${this.parar}>
                <p class='text-stop'>STOP</p>
            </button>
        </div>

    `

    }

    static styles=css`

        select,input,button{
            margin:6px;
            padding:6px;
        }

        p {
            font-size: .9rem;
            /* font-weight: bold; */
        }

        .start {
            width: 8rem;
            padding: 0.5rem;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .text-start {
            font-size: 1.1rem;
            /* font-weight: bold; */
        }

        .stop {
            width: 8rem;
            padding: 0.5rem;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .text-stop {
            font-size: 1.1rem;
            /* font-weight: bold; */
        }

    `

}