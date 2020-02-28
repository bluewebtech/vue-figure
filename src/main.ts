/**
 * Modules
 */
import Vue from 'vue';
import VueCookie from 'vue-cookies';
import VueLocalStorage from 'vue-localstorage';

/**
 * Components
 */
import Components from '@/components';
import Layouts from '@/layouts';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/**
 * Module Registry
 */
Vue.use(VueCookie);
Vue.use(VueLocalStorage);

/**
 * Component Registry
 */
Vue.use(Components);
Vue.use(Layouts);

/**
 * Define the application instance.
 *
 * @var {Object}
 */
const instance = App;

/**
 * Setup and configure the application instance before it gets mounted.
 *
 * @var {Object}
 */
const app = new Vue({
  router,
  store,
  render: h => h(instance),
});

/**
 * Attach the application instance to the window object.
 */
declare global {
  interface Window {
    app: any;
  }
}
window.app = app;

/**
 * Mount the application.
 */
app.$mount('#app');
