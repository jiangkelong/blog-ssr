<template>
  <div>
    <h1>分类文章列表页,分类：{{ categoryName }}，第{{ pageIndex }}页</h1>
  </div>
</template>
<script>
export default {
  // 路由参数校验
  validate({ params }) {
    // pageIndex必须是number类型或未定义
    return /^\d+$/.test(params.index) || params.index === undefined
  },
  asyncData({ params }) {
    return {
      categoryName: params.categoryName,
      pageIndex: params.index ? params.index : 1
    }
  }
}
</script>
