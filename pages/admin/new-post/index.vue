<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    async onSubmitted(postData) {
      const response = await axios.post(
        "https://school-bus-app-96816.firebaseio.com/posts.json",
        postData
      );
      if (!response) throw new Error();
      console.log(response);
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>


