/**
 * Modules
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import Database from './database';

/**
 * Module Registry
 */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [VuexORM.install(Database)],
});
