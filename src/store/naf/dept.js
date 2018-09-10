import * as types from '@/constants/mutation-types';

const api = {
  create: '/naf/dept/create',
  update: '/naf/dept/update',
  delete: '/naf/dept/delete',
  list: '/naf/dept/list',
}
// initial state
// shape: [{ id, quantity }]
export const state = () => ({
  items: [], //所有数据
  current: null,
});

// actions
export const actions = {
  async load({ commit }, payload = {}) {
    const { id = 0 } = payload;
    const res = await this.$axios.$get(`${api.list}?id=${id}&recursive=1`)
    if(res.errcode === 0) {
      commit(types.DEPT_LOADED, res.data);
    }
    return res;
  },
  async create({ commit, state }, payload) {
    const { id, parentid, name, order } = payload;
    const res = await this.$axios.$post(`${api.create}`, { id, parentid, name, order });
    if(res.errcode === 0) {
      commit(types.DEPT_CREATED, res.data);
    }
    return res;
  },
  async delete({ commit, state }, { id }) {
    const res = await this.$axios.$get(`${api.delete}?id=${id}`);
    if(res.errcode === 0)
      commit(types.DEPT_DELETED, { id });
    return res;
  },
  async update({ commit, state }, payload = {}) {
    const { id, parentid, name, order } = payload;
    const res = await this.$axios.$post(`${api.update}?id=${id}`, { parentid, name, order });
    if(res.errcode === 0)
      commit(types.DEPT_UPDATED, res.data);
    return res;
  },
};

// mutations
export const mutations = {
  [types.DEPT_LOADED](state, payload) {
    state.items = payload;
  },
  [types.DEPT_SELECTED](state, payload) {
    state.current = payload;
  },
  [types.DEPT_CREATED](state, payload) {
    state.items.push(payload);
  },
  [types.DEPT_DELETED](state, payload) {
    const idx = state.items.findIndex(p=>p.id === payload.id);
    state.items.splice(idx, 1);
  },
  [types.DEPT_UPDATED](state, payload) {
    const idx = state.items.findIndex(p=>p.id === payload.id);
    state.items.splice(idx, 1, payload);
  },
};
