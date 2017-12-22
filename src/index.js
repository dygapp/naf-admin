import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import store from './store';
import './index.less';
import router from './router';

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log('will to:', to);
    const { login } = store.state;
    if (!login.authorized) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

const _app = new Vue({
  el: '#app',
  data: {
    login: false,
  },
  // computed: {
  //   ViewComponent () {
  //     return this.login ? Main : Login
  //   }
  // },
  render(h) { return h(App); },
  router,
  store,
});

sync(store, router); // done. Returns an unsync callback fn

