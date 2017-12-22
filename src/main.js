import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';

Vue.use(ElementUI);

const _app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
