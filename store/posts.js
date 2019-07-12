export const state = () => ({
  loadedPosts: []
})

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  }
}

export const actions = {
  setPosts(vxContext, posts) {
    vxContext.commit('setPosts', posts)
  }
}
