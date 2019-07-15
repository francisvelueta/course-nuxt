import axios from 'axios'
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
      const response = await axios.post(
        `${process.env.baseUrl}/posts.json`,
        createdPost
      )
      if (!response) throw new Error()
      vxContext.commit('addPost', { ...createdPost, id: response.data.name })
    } catch (e) {
      new Error(e)
    }
  },
  editPost(vxContext, editedPost) {
    return axios
      .put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
      .then(res => {
        vxContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  }
}
