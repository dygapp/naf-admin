import * as types from './mutation-types';

export const login = ({ commit }, { username }) => {
  commit(types.LOGIN_SUCCESS, {
    username,
  });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT_SUCCESS);
};
