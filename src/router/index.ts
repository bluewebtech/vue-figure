/**
 * Modules
 */
import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';
import routes from './routes';

/**
 * Module Registry
 */
Vue.use(VueMeta);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
