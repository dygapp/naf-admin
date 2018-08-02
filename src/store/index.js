
export const state = () => ({
  isAuthoriezd: false
})

export const mutations = {
}

export const getters = {
  isAuthenticated: state => state.login.isAuthenticated,
  userinfo: state => state.login.userinfo
}