import auth from '@/api/auth';
import * as types from '@/constants/mutation-types';

// initial state
// shape: [{ id, quantity }]
export const state = () => ({
  loading: false,
  authorized: true,
  userinfo: null,
});

// getters
export const getters = {
  userStatus: state => (state.userinfo || {}).status,
};

// actions
export const actions = {
  async login({ commit, dispatch/* , state */ }, { username, password }) {
    commit(types.SHOW_LOADING);
    try {
      let res = await auth.login({ username, password });
      console.log(res);
      if (res.errcode && res.errcode !== 0) {
        commit(types.LOGIN_FAILURE);
      } else {
        res = await dispatch('fetch', { username });
        commit(types.LOGIN_SUCCESS);
      }
      return res;
    } catch (err) {
      console.error(err);
      commit(types.LOGIN_FAILURE);
      return { errcode: -1, errmsg: 'error' };
    } finally {
      commit(types.HIDE_LOADING);
    }
  },
  async fetch({ commit/* , state */ }, { username }) {
    const res = await auth.fetch({ username });
    const { userinfo } = res;
    commit(types.USER_INFO, userinfo);
    return res;
  },
};

// mutations
export const mutations = {
  [types.SHOW_LOADING](state) {
    state.loading = true;
  },
  [types.HIDE_LOADING](state) {
    state.loading = false;
  },

  [types.LOGIN_SUCCESS](state) {
    state.authorized = true;
  },
  [types.LOGIN_FAILURE](state) {
    state.authorized = false;
  },

  [types.USER_INFO](state, payload) {
    state.userinfo = payload;
  },
};
