<template>
  <section class="side">
    <div class="card-bg side-item">
      <h4 class="side-item-title">推荐阅读</h4>
      <div class="inner">
        <ul class="list-article">
          <li v-for="i in 6" :key="i">
            <a href="/" target="_blank">我有一个梦想</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
