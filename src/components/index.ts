import HelloWorld from './HelloWorld.vue';

const Components = {
  install(Vue: any) {
    Vue.component('HelloWorld', HelloWorld);
  },
};

export default Components;
