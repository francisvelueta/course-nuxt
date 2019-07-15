export const actions = {
  nuxtServerInit(vxContext, context) {
    return context.app.$axios
      .$get(`/posts.json`)
      .then(data => {
        const postsArray = []
        for (const key in data) {
          postsArray.push({ ...data[key], id: key })
        }
        vxContext.commit('posts/setPosts', postsArray)
      })
      .catch(e => context.error(e))
  }
}
