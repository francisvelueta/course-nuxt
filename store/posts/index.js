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
  nuxtServerInit(vxContext, context) {
    return new Promise(resolve => {
      setTimeout(() => {
        vxContext.commit('setPosts', [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This is our firts post',
            thumbnail:
              'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png'
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This is our second post',
            thumbnail:
              'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          },
          {
            id: '3',
            title: 'Third Post',
            previewText: 'This is our third post',
            thumbnail:
              'https://www.muycomputerpro.com/wp-content/uploads/2014/10/desarrollo_software.jpg'
          }
        ])
        resolve()
      }, 1500)
    })
  },
  setPosts(vxContext, posts) {
    // vxContext commit receive an action and payload(posts)
    vxContext.commit('setPosts', posts)
  }
}
