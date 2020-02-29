<template>
  <div>
    <div v-for="i in 9" :key="i" class="card-bg article-list">
      <h1 class="article-title">
        <b>【顶】</b>
        <a href="#" target="_blank">
          Panel heading without title
        </a>
      </h1>
      <div class="article-thumbnail img-hover-scale">
        <a href="#" target="_blank">
          <img src="/1.jpg" alt="..." />
        </a>
      </div>
      <p class="article-summary">
        就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深.
        就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深
      </p>
      <div class="article-info">
        <div class="item">
          <b-icon icon="grid-fill" font-scale="1.5"></b-icon><a href="#">CSS</a>
        </div>
        <div class="item">
          <b-icon icon="tag-fill" font-scale="1.5"></b-icon><a href="#">CSS</a>
        </div>
        <div class="item">
          <b-icon icon="clock-fill" font-scale="1.5"></b-icon>2019-11-01
        </div>
        <div class="item">
          <b-icon icon="eye-fill" font-scale="1.5"></b-icon>20
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleList'
}
</script>
