<template>
  <div>
    <b-container>
      <b-row v-if="$route.name === 'index'">
        <b-col>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="10"
            img-height="4"
          >
            <b-carousel-slide
              caption="First slide"
              img-src="/banner1.png"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="/banner2.png"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="/banner3.png"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
      <b-row class="main">
        <b-col lg="9"> <nuxt /></b-col>
        <b-col lg="3">side</b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {}
</script>
