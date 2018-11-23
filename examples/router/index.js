import Vue from 'vue';
import Router from 'vue-router';
import demo from 'examples/components/demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path: '/docs_test',
      name: 'docs_test',
      component: r => require.ensure([], () => r(require('examples/docs/test.md')))
    }
  ]
});
