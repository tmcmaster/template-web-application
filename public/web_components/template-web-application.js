import {html, css, LitElement} from '../web_modules/lit-element.js';

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
        `;
    }
});
