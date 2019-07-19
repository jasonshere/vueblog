<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1" v-for="item in pics" :key="item.url">
            <img :src="item.url" alt="">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                spaceBetween: 30,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
                }
            }
        },
        props: [ 'pics' ]
    }
</script>

<style lang="scss" scoped>
    .swiper-slide {
        height: 200px;
        &.slide-1 {
            background-color: red
        }
        &.slide-2 {
            background-color: green
        }
        &.slide-3 {
            background-color: blue
        }
        &.slide-4 {
            background-color: purple
        }
        &.slide-5 {
            background-color: cyan
        }
    }
</style>