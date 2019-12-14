import {html, css, LitElement} from '../web_modules/lit-element.js';

import '../web_modules/@wonkytech/tm-splash-screen.js';
import '../web_modules/@wonkytech/vaadin-elements.js';
import '../web_modules/@wonkytech/polymer-elements.js';
import '../web_modules/@wonkytech/material-elements.js';

window.customElements.define('template-web-application', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello World! from the template-web-application web component';
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        setTimeout(() => {
            this.shadowRoot.getElementById('aaa').hide();
        }, 3000);
    }

    static get styles() {
        // language=CSS
        return css`
            :host {
                display: inline-block;
            }
            h2 {
                color: gray;
            }
        `;
    }
    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <h2>${this.heading}</h2>
            <vaadin-text-field value="Vaadin..." label="Testing Vaadin"></vaadin-text-field>
            <paper-input value="Polymer..." label="Testing Polymer"></paper-input>
            <mwc-textfield value="Material..." label="Testing Material"></mwc-textfield>
            <tm-splash-screen id="aaa" heading="Web Application Template">
                <span>The purpose  of this web component,</span>
                <span>is to make it easier to build PWA applications.</span>
            </tm-splash-screen>
        `;
    }
});
