
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

    static styles=css`

    select,input,button{
    margin:6px;
    padding:6px;
    }

    `

    render(){

    return html`

    <h3>Lector de Balanza</h3>

    <div>

    Puerto

    <select @change=${(e:any)=>this.puerto=e.target.value}>

    ${this.puertos.map(p=>html`
    <option value=${p}>${p}</option>
    `)}

    </select>

    </div>

    <div>

    Tecla activadora

    <input
    .value=${this.tecla}
    @input=${(e:any)=>this.tecla=e.target.value}
    />

    </div>

    <div>

    <button @click=${this.iniciar}>
    Iniciar
    </button>

    <button @click=${this.parar}>
    Parar
    </button>

    </div>

    <div>

    Peso estable: ${this.peso}

    </div>

    `

    }

}