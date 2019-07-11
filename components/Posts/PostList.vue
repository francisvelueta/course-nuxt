<template>
  <section class="post-list">
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
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
