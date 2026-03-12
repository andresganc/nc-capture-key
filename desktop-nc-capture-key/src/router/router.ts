
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
            path: '/page01',
            render: () => html`<main-layout main="page01"></main-layout>`,
        },

        {
            path: '/page02',
            render: () => html`<main-layout main="page02"></main-layout>`,
        },

        {
            path: '/page03',
            render: () => html`<main-layout main="page03"></main-layout>`,
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