import {html, render} from "./web_modules/lit-html.js";
import {loadFirebaseEmbedded} from './web_modules/@wonkytech/tm-script-loader.js';
//import './web_components/app-one.js';
import './web_components/app-two.js';

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
            margin: 0;
            padding: 0;            
        }
    </style>
<!--    <app-one title="Template Application"></app-one>-->
    <app-two id="aa" title="Template Application"></app-two>
`, document.querySelector('body'));

