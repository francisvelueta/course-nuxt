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
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(
      post => post.id === editedPost.id
    )
    state.loadedPosts[postIndex] = editedPost
  }
}

export const actions = {
  setPosts(vxContext, posts) {
    // vxContext commit receive an action and payload(posts)
    vxContext.commit('setPosts', posts)
  },
  async addPost(vxContext, post) {
    try {
      const createdPost = {
        ...post,
        updatedDate: new Date()
      }
      const data = await this.$axios.$post(`/posts.json`, createdPost)
      if (!data) throw new Error()
      vxContext.commit('addPost', { ...createdPost, id: data.name })
    } catch (e) {
      new Error(e)
    }
  },
  editPost(vxContext, editedPost) {
    return this.$axios
      .$put(`/posts/${editedPost.id}.json`, editedPost)
      .then(data => {
        vxContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  }
}
