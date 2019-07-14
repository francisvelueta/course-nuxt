<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  // Asyncdata (need it asynchronous data)with async await
  fetch: async context => {
    // if (context.store.state.posts["posts/loadedPosts"] > 0) return null;
  },
  computed: {
    loadedPosts() {
      return this.$store.getters["posts/loadedPosts"];
    }
  }
  // created() {
  //   // to get getters from store is [posts/loadedPosts] the path from js action
  //     this.$store.dispatch("posts/setPosts", this.loadedPosts);
  //   console.log(this.$store.getters["posts/loadedPosts"]);
  // }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

