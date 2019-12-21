import {html, css, LitElement} from '../web_modules/lit-element.js';

import '../web_modules/@wonkytech/tm-splash-screen.js';
import '../web_modules/@wonkytech/vaadin-elements.js';
import '../web_modules/@wonkytech/polymer-elements.js';
import '../web_modules/@wonkytech/material-elements.js';
import '../web_modules/@wonkytech/tm-page-layout.js';
import '../web_modules/@wonkytech/tm-page-router.js';

window.customElements.define('app-two', class extends LitElement {

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
            <tm-page-router>
                <tm-page-layout slot="page" title="Page One">
                    <div slot="drawer">DRAWER MENU</div>
                    <div slot="toolbar">TOOLBAR MENU</div>
                    <div slot="header-top">HEADER TOP</div>
                    <div slot="header-middle">HEADER MIDDLE</div>
                    <div slot="header-bottom">HEADER BOTTOM</div>
                    <div slot="main-top">MAIN TOP</div>
                    <div slot="main-middle">MAIN MIDDLE A</div>
                    <div slot="main-bottom">MAIN BOTTOM</div>
                </tm-page-layout>
                <tm-page-layout slot="page" title="Page Two">
                    <div slot="drawer">DRAWER MENU</div>
                    <div slot="toolbar">TOOLBAR MENU</div>
                    <div slot="header-top">HEADER TOP</div>
                    <div slot="header-middle">HEADER MIDDLE</div>
                    <div slot="header-bottom">HEADER BOTTOM</div>
                    <div slot="main-top">MAIN TOP</div>
                    <div slot="main-middle">MAIN MIDDLE B</div>
                    <div slot="main-bottom">MAIN BOTTOM</div>
                </tm-page-layout>
                <tm-page-layout slot="page" title="Page Three">
                    <div slot="drawer">DRAWER MENU</div>
                    <div slot="toolbar">TOOLBAR MENU</div>
                    <div slot="header-top">HEADER TOP</div>
                    <div slot="header-middle">HEADER MIDDLE</div>
                    <div slot="header-bottom">HEADER BOTTOM</div>
                    <div slot="main-top">MAIN TOP</div>
                    <div slot="main-middle">MAIN MIDDLE C</div>
                    <div slot="main-bottom">MAIN BOTTOM</div>
                </tm-page-layout>
                <tm-page-layout slot="page" title="Page Four">
                    <div slot="drawer">DRAWER MENU</div>
                    <div slot="toolbar">TOOLBAR MENU</div>
                    <div slot="header-top">HEADER TOP</div>
                    <div slot="header-middle">HEADER MIDDLE</div>
                    <div slot="header-bottom">HEADER BOTTOM</div>
                    <div slot="main-top">MAIN TOP</div>
                    <div slot="main-middle">MAIN MIDDLE D</div>
                    <div slot="main-bottom">MAIN BOTTOM</div>
                </tm-page-layout>
             </tm-page-router>


        `;
    }
});
