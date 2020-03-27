<template>
  <div>
    <h1>标签文章列表页，标签：{{ tagName }}，第{{ pageIndex }}页</h1>
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
      tagName: params.tagName,
      pageIndex: params.index ? params.index : 1
    }
  }
}
</script>
