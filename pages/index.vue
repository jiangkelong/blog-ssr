<template>
  <div>
    <!-- <Carousel /> -->
    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
// import Carousel from '~/components/Carousel.vue'

export default {
  components: {
    ArticleList
    // Carousel
  },
  asyncData({ params }) {
    console.log(1)
    return {
      categoryName: params.categoryName,
      pageIndex: params.index ? params.index : 1
    }
  }
}
</script>
