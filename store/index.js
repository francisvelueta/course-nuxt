import axios from 'axios'
export const actions = {
  nuxtServerInit(vxContext, context) {
    return axios
      .get(`${process.env.baseUrl}/posts.json`)
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        vxContext.commit('posts/setPosts', postsArray)
      })
      .catch(e => context.error(e))
  }
}
