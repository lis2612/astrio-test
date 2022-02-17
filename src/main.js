import { createApp } from 'vue';
// import { createStore } from 'vuex';
import Store from './store';
import { Quasar, Dialog } from 'quasar';
import quasarLang from 'quasar/lang/ru';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';
import App from './App.vue';

const myApp = createApp(App);
// const store = createStore();

myApp
  .use(Quasar, {
    plugins: {Dialog},
    lang: quasarLang,
  })
  .use(Store)
  .mount('#app');


// myApp.mount('#app');
