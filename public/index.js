import {html, render} from "./web_modules/lit-html.js";
import './web_components/template-web-application.js';
import {loadFirebaseEmbedded} from './web_modules/@wonkytech/tm-script-loader.js';

loadFirebaseEmbedded().then((firebase) => {
    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        console.log(`Firebase SDK loaded with ${features.join(', ')}`);
    } catch (error) {
        console.error('Error loading the Firebase SDK, check the console.', error);
    }
}).catch((error) => {
    console.error('There was an error loading the firebase libraries.', error);
});

render(html`
    <style>
        body {
          //background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
        
        span {
            //text-align: center;
            //border: solid red 1px;;
        }
        
        img {
            width: 200px;
        }
    </style>
    <template-web-application></template-web-application>
`, document.querySelector('body'));