<template>
  <div class="article-list">
    <section v-for="i in 9" :key="i" class="card-bg article-item">
      <div class="fc-flag">置顶</div>
      <h1 class="article-title">
        <nuxt-link to="/tags">我有一个梦想</nuxt-link>
      </h1>
      <b-row>
        <b-col md="4">
          <div class="article-thumbnail img-hover-scale">
            <nuxt-link to="/tags"><img src="/4.jpg" alt="..."/></nuxt-link>
          </div>
        </b-col>
        <b-col md="8">
          <p class="article-summary">
            一百年前，一位伟大的美国人签署了《解放黑奴宣言》，今天我们就是在他的雕像前集会。这一庄严宣言犹如灯塔的光芒，给千百万在那摧残生命的不义之火中受煎熬的黑奴带来了希望。它之到来犹如欢乐的黎明，结束了束缚黑人的漫长之夜。
          </p>
          <div class="article-info">
            <div class="item">
              <b-icon icon="grid-fill" font-scale="1.5" />
              <nuxt-link to="/categories/css">CSS</nuxt-link>
            </div>
            <div class="item">
              <b-icon icon="tag-fill" font-scale="1.5" />
              <nuxt-link to="/tags/css">CSS</nuxt-link>
            </div>
            <div class="item">
              <b-icon icon="clock-fill" font-scale="1.5"></b-icon>2019-11-01
            </div>
            <div class="item">
              <b-icon icon="eye-fill" font-scale="1.5"></b-icon>20
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ArticleList',
  data() {
    return {}
  },
  created() {
    if (process.client) {
      this.$sr.reveal('.article-item', {
        reset: false,
        distance: '150%',
        // origin: 'left',
        duration: 800,
        easing: 'ease',
        interval: 100,
        opacity: 0,
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        scale: 0.5
      })
    }
  }
}
</script>
