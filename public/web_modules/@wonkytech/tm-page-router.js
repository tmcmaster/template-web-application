import { h as html } from '../common/lit-html-acd9a6eb.js';
import { LitElement, css } from '../lit-element.js';
import '../common/disable-upgrade-mixin-ae41579f.js';
import './polymer-elements.js';
import './vaadin-elements.js';

window.customElements.define('tm-page-router', class extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {};
  }

  constructor() {
    super();
  } // noinspection JSUnusedGlobalSymbols


  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const main = this.shadowRoot.getElementById('main');
    const tabs = this.shadowRoot.getElementById('tabs');
    tabs.addEventListener('selected-changed', () => {
      this._selectPage(tabs.selected);
    });
    this.pages = Array.from(main.assignedNodes());
    this.tabs = tabs;
    this.pages.forEach((node, index) => {
      if (index > 0) {
        node.classList.add('hidden');
      }

      const menuItem = document.createElement('vaadin-tab');
      menuItem.appendChild(document.createTextNode(node.title));
      tabs.appendChild(menuItem);
    });
  }

  _selectPage(pageIndex) {
    const {
      pages
    } = this;
    pages.forEach((page, index) => {
      if (index === pageIndex) {
        this._selectGivenPage(page);
      } else {
        page.classList.add('hidden');
      }
    });
  }

  _selectGivenPage(page) {
    const component = page.getAttribute('component');

    if (component !== undefined) {
      page.appendChild(document.createElement(component));
      page.removeAttribute('component');
    }

    page.classList.remove('hidden');

    if (page.notifyResize !== undefined) {
      page.notifyResize();
    }
  } // TODO: need to review using templates
  //
  //     <template slot="page" title="Five" reload>
  //         <paper-input label="Test Label" value="This is a test"></paper-input>
  //     </template>
  //
  // _selectGivenTemplate(page, index) {
  //     console.log('Page: ', page.tagName);
  //     if (page.tagName === 'TEMPLATE' && !page.getAttribute('loaded')) {
  //         if (!page.getAttribute('loaded') || page.getAttribute('reload'))
  //             console.log('Applying template');
  //         let clone = document.importNode(page.content, true);
  //         const body = this.shadowRoot.getElementById('body');
  //         body.appendChild(clone);
  //         page.setAttribute('loaded', true);
  //     }
  //     page.classList.remove('hidden');
  // }


  static get styles() {
    // language=CSS
    return css`
            :host {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                //border: solid red 2px;
                color: black;
                width: 100%;
                height: 100%;
            }
            nav {
                color: gray;
                flex-shrink: initial;
            }
            main {
                color: darkgray;
                box-sizing: border-box;
                //border: solid blue 2px;
                flex: auto;
            }
            
            ::slotted(.hidden) {
                display: none;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
            <nav id="nav">
                <vaadin-tabs id="tabs"></vaadin-tabs>
            </nav>
            <main>
                <slot id="main" name="page"></slot>
            </main>
        `;
  }

});
