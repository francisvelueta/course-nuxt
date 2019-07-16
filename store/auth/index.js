import Cookie from 'js-cookie'
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
          new Date().getTime() + Number.parseInt(res.expiresIn) * 1000
        )
        Cookie.set('jwt', res.idToken)
        Cookie.set(
          'expirationDate',
          new Date().getTime() + Number.parseInt(res.expiresIn) * 1000
        )
      })
      .catch(e => console.log(e))
  },
  initAuth(vxContext, req) {
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log('No token or invalid token')
      vxContext.commit('clearToken')
      vxContext.dispatch('logout')
    }
    vxContext.commit('setToken', token)
  },
  logout(vxContext) {
    vxContext.commit('clearToken')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
  }
}
