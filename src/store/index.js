
export const state = () => ({
  isAuthoriezd: false
})

export const mutations = {
}

export const getters = {
  logined: state => state.login.authorized,
  userinfo: state => state.login.userinfo
}