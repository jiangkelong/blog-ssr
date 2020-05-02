<template>
  <article class="card-bg">
    <h1>我有一个梦想</h1>
    <article-info />
    <hr />
    <p>
      一百年前，一位伟大的美国人签署了《解放黑奴宣言》，今天我们就是在他的雕像前集会。这一庄严宣言犹如灯塔的光芒，给千百万在那摧残生命的不义之火中受煎熬的黑奴带来了希望。它之到来犹如欢乐的黎明，结束了束缚黑人的漫长之夜。
    </p>
    <hr />
  </article>
</template>
<script>
import ArticleInfo from '~/components/ArticleInfo.vue'
export default {
  components: {
    ArticleInfo
  },
  // 路由参数校验
  validate({ params }) {
    // 文章id必须是number类型
    return /^\d+$/.test(params.id)
  },
  asyncData({ params }) {
    return { articleId: params.id }
  }
}
</script>
