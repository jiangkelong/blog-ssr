<template>
  <div>
    <navbar />
    <b-container class="main-container">
      <b-row>
        <b-col class="b-col" lg="9"> <nuxt /></b-col>
        <b-col class="b-col" lg="3"><side /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Side from '~/components/Side.vue'
export default {
  components: {
    Navbar,
    Side
  }
}
</script>
