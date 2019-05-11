import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import RouteConfig from './router.config.js';
// 声明使用路由
Vue.use(VueRouter);
// 注册路由
const routers = new VueRouter({
  mode: 'history',
  linkActiveClass:'is-active',
  routes: RouteConfig
});
new Vue({
  el: '#app',
  router: routers,
  render: h => h(App)
});
