import Vue from 'vue';
import TreeApp from 'tree-app';
import 'tree-app/lib/tree-app.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('tree-app', TreeApp);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
