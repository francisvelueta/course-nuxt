export const loadPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
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
    }, 1500)
  })
}

export const loadPost = context => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: '1',
        title: `First Post (ID: ${context.route.params.id})`,
        previewText: 'This is our firts post',
        author: 'Francis',
        updatedDate: new Date(),
        content:
          'Some domy text wich is definitely not is the preview text through! ',
        thumbnail:
          'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2otCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png'
      })
    }, 1500)
  })
}
