<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPost" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  data: () => ({
    loadedPost: [
      {
        id: "1",
        title: "First Post",
        previewText: "This is our firts post",
        thumbnail:
          "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
      },
      {
        id: "2",
        title: "Second Post",
        previewText: "This is our second post",
        thumbnail:
          "https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg"
      },
      {
        id: "3",
        title: "Third Post",
        previewText: "This is our third post",
        thumbnail:
          "https://www.muycomputerpro.com/wp-content/uploads/2014/10/desarrollo_software.jpg"
      }
    ]
  })
};
</script>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: white;
  background-color: #b40404;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>


