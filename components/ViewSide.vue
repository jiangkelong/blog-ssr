<template>
  <section class="side">
    <div class="card-bg side-item">
      <h4 class="side-item-title">推荐阅读</h4>
      <div class="inner">
        <ul class="list-article">
          <li v-for="i in 6" :key="i">
            <nuxt-link to="/article/1">我有一个梦想</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
