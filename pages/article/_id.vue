<template>
  <div class="container">
    <h1>文章详情页，ID:{{ articleId }}</h1>
  </div>
</template>
<script>
export default {
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
