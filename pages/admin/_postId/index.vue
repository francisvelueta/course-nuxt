<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Francis",
        title: "My second post",
        content: "Thanks for that",
        thumbnailLink:
          "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4zx2oCU_lijl3z600/videoblocks-hackers-program-code-running-on-screen-4k_bwxci_4l_thumbnail-full01.png"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>


