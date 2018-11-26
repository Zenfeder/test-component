// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import KdUI from 'packages/index';
// import { Button } from 'packages/index';
import 'packages/theme-default/lib/index.css';

Vue.use(KdUI);
// Vue.component(Button.name, Button);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
