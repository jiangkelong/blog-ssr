<template>
  <div class="article-info">
    <div class="item" title="分类">
      <b-icon icon="grid-fill" font-scale="1.5" />
      <nuxt-link to="/categories/css">CSS</nuxt-link>
    </div>
    <div class="item" title="标签">
      <b-icon icon="tag-fill" font-scale="1.5" />
      <nuxt-link to="/tags/css">CSS</nuxt-link>
    </div>
    <div class="item" title="发布日期">
      <b-icon icon="clock-fill" font-scale="1.5"></b-icon>
      <time pubdate>2019-11-01</time>
    </div>
    <div class="item" title="阅读量">
      <b-icon icon="eye-fill" font-scale="1.5"></b-icon>20
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleInfo',
  data() {
    return {}
  }
}
</script>
