<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        thumbnail="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
        title="Hello there!"
        previewText="This my first post!"
      />
      <PostPreview
        id="2"
        thumbnail="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
        title="Welcome to tecnology!"
        previewText="This my second post!"
      />
      <PostPreview
        id="3"
        thumbnail="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
        title="About programming!"
        previewText="This my third post!"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/postPreview";
export default {
  components: {
    PostPreview
  }
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>


