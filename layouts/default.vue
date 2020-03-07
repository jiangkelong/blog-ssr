<template>
  <div>
    <navbar />
    <b-container class="main-container">
      <b-row>
        <b-col class="b-col" lg="9"> <nuxt /></b-col>
        <b-col class="b-col" lg="3"><view-side /></b-col>
      </b-row>
    </b-container>
    <view-footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import ViewSide from '~/components/ViewSide.vue'
import ViewFooter from '~/components/ViewFooter.vue'
export default {
  components: {
    Navbar,
    ViewSide,
    ViewFooter
  }
}
</script>
