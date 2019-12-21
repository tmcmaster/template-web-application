import {html, css, LitElement} from '../web_modules/lit-element.js';

import '../web_modules/@wonkytech/tm-splash-screen.js';
import '../web_modules/@wonkytech/vaadin-elements.js';
import '../web_modules/@wonkytech/polymer-elements.js';
import '../web_modules/@wonkytech/material-elements.js';
import '../web_modules/@wonkytech/tm-page-layout.js';
import '../web_modules/@wonkytech/tm-page-router.js';

window.customElements.define('app-one', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            title: {type: String}
        }
    }

    constructor() {
        super();
        this.title = '';
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
    }

    static get styles() {
        // language=CSS
        return css`
            :host {
                width: 100vw;
                height: 100vh;
                display: inline-block;
                --tm-page-layout-header-height: 20vh;
                --tm-page-layout-header-image: url('../images/Beach-Banner.jpg');
                --tm-page-layout-header-color: white;
            }
            h2 {
                color: gray;
            }
            tm-page-router {
                min-height: 70vh;
                //height: 1500px;
                display:inline-block;
            }
            
            article[title="Two"] {
                height: 1500px;
            }
        `;
    }
    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <tm-page-layout title="${this.title}">
                <div slot="drawer">DRAWER MENU</div>
                <div slot="toolbar">TOOLBAR MENU</div>
                <div slot="header-top">HEADER TOP</div>
                <div slot="header-middle">HEADER MIDDLE</div>
                <div slot="header-bottom">HEADER BOTTOM</div>
<!--                <div slot="main-top">MAIN TOP</div>-->
                <tm-page-router slot="main-middle">
                    <article slot="page" title="One">
                        <h3>Page One</h3>
                    </article>
                    <article slot="page" title="Two">
                        <h3>Page Two</h3>
                    </article>
                    <article slot="page" title="Three">
                        <h3>Page Three</h3>
                    </article>
                 </tm-page-router>
                <div slot="main-bottom">MAIN BOTTOM</div>
            </tm-page-layout>
        `;
    }
});
