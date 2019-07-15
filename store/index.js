import axios from 'axios'
import { Z_ASCII } from 'zlib'
export const actions = {
  nuxtServerInit(vxContext, context) {
    return axios
      .get('https://school-bus-app-96816.firebaseio.com/posts.json')
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
