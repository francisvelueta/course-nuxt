export const state = () => ({
  loadedPosts: []
})

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}

export const mutations = {
  // setPosts receive state and a payload(posts)
  setPosts(state, posts) {
    state.loadedPosts = posts
  }
}

export const actions = {
  setPosts(vxContext, posts) {
    // vxContext commit receive an action and payload(posts)
    vxContext.commit('setPosts', posts)
  }
}
