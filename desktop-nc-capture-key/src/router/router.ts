
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from '@lit-labs/router'

// LAYOUTS
import '@layouts/main-layout'

@customElement('main-router')
export class MainRouter extends LitElement {

    private router = new Router(this, [

        {
            path: '/',
            render: () => html`<main-layout main="home"></main-layout>`,
        },

        {
            path: '/videos',
            render: () => html`<main-layout main="videos"></main-layout>`,
        },

        {
            path: '/converter',
            render: () => html`<main-layout main="converter"></main-layout>`,
        },

        {
            path: '/finished',
            render: () => html`<main-layout main="finished"></main-layout>`,
        },

        {
            path: '/about',
            render: () => html`<main-layout main="about"></main-layout>`,
        },

        // {
        //     path: '/main/converter',
        //     render: () => html`<main-layout main="converter"></main-layout>`,
        // },

        // {
        //     path: '/main/finished',
        //     render: () => html`<main-layout main="finished"></main-layout>`,
        // },

        // {
        //     path: '/main/:name',
        //     render: ({ params }) => html`<main-layout main=${params.name}></main-layout>`,
        // },

        {
            path: '(.*)',
            render: () => html`<h2>Error 404 - Pagina no encontrada</h2>`
        },

    ]);

    render() {
        return html`${this.router.outlet()}`;
    }
    
}