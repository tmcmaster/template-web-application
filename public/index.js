import './web_components/template-web-application.js';
import {loadFirebaseEmbedded} from './web_modules/@wonkytech/tm-script-loader.js';
loadFirebaseEmbedded().then((firebase) => {
    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        console.log(`Firebase SDK loaded with ${features.join(', ')}`);
    } catch (errow) {
        console.error('Error loading the Firebase SDK, check the console.', error);
    }
}).catch((error) => {
    console.error('There was an error loading the firebase libraries.', error);
});