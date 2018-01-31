import api from '~/api/contacts';
import * as types from '~/store/mutation-types';

// initial state
// shape: [{ id, quantity }]
const _state = {
  items: [],
  current: null,
};

// actions
const actions = {
  async create({ commit }, payload) {
    try {
      const res = await api.create(payload);
      console.log(res);
      if (res.errcode === 0) {
        commit(types.APPS_LOADED, res.data);
      }
      return res;
    } catch (err) {
      console.error(err);
      return { errcode: -1, errmsg: err.message || '处理失败' };
    }
  },

  async list({ commit }) {
    try {
      const res = await api.list();
      console.log(res);
      if (res.errcode === 0) {
        commit(types.APPS_LOADED, res.data);
      }
      return res;
    } catch (err) {
      console.error(err);
      return { errcode: -1, errmsg: err.message || '处理失败' };
    }
  },
};

// mutations
const mutations = {
  [types.APPS_LOADED](state, payload) {
    state.items = payload;
  },
  [types.APPS_SELECTED](state, payload) {
    state.current = payload;
  },
};

export default {
  namespaced: true,
  state: _state,
  actions,
  mutations,
};
