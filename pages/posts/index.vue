<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import PostList from "@/components/Posts/PostList";

import { loadPosts } from "@/api/posts";

export default {
  components: {
    PostList
  },
  // Asyncdata (need it asynchronous data)with async await
  asyncData: async context => {
    const loadedPosts = await loadPosts();
    if (!loadedPosts) return new Error();
    return {
      loadedPosts
    };
  },
  created() {}
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

