<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
    <!--   <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
      title="Welcome to tecnology!"
      previewText="This my second post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
      title="About programming!"
      previewText="This my third post!"
    />-->
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/postPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
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
