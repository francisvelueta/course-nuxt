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
  },
  clearToken(state) {
    return (state.token = null)
  }
}

export const actions = {
  authenticateUser(vxContext, authData) {
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
        localStorage.setItem('token', res.idToken)
        localStorage.setItem(
          'tokenExpiration',
          new Date().getTime() + res.expiresIn * 1000
        )
        vxContext.dispatch('setLogoutTimer', res.expiresIn * 1000)
      })
      .catch(e => console.log(e))
  },

  setLogoutTimer(vxContext, duration) {
    setTimeout(() => {
      vxContext.commit('clearToken')
    }, duration)
  },
  initAuth(vxContext) {
    const token = localStorage.getItem('token')
    const expirationDate = localStorage.getItem('tokenExpiration')
    if (new Date().getTime() > +expirationDate || !token) {
      return
    }
    vxContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
    vxContext.commit('setToken', token)
  }
}
