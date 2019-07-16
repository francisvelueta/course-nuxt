export const state = () => ({
  token: null
})

export const getters = {
  getToken(state) {
    return state.token
  },
  isAuthenticated(state) {
    return state.token != null
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  authenticateUser(vxContext, authData) {
    console.log(vxContext)
    let authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
      process.env.fbApiKey
    }`
    if (!authData.isLogin) {
      authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
        process.env.fbApiKey
      }`
    }
    return this.$axios
      .$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        vxContext.commit('setToken', res.idToken)
      })
      .catch(e => console.log(e))
  }
}
