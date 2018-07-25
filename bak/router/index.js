import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  mode: 'history', // 使用H5 history模式
  routes,
});
