<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">Title of the Post</h1>
      <div class="post-details">
        <span class="post-detail">Last updated on xxx</span>
        <span class="post-detail">Written by name</span>
      </div>
      <p>Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you about the post sen a mail to
        <a
          href="mailto:fvelueta@outlook.com"
        >fvelueta@outlook.com</a>
      </p>
    </section>
  </div>
</template>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

