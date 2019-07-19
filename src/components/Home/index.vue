<template>
    <div>
        <swiper :pics="listPictures"></swiper>
        <articles></articles>
        <md-dialog-alert
            :md-active.sync="failed"
            md-title="Get Pictures"
            md-content="Get Pictures Failed." />
    </div>
</template>

<script>
    import swiper from './swiper.vue'
    import articles from './articles.vue'
    export default {
        name: "home",
        data: () => {
            return {
                listPictures: [],
                failed: false
            }
        },
        components: {
            swiper,
            articles
        },
        created() {
            this.getPics() 
        },
        methods: {
            getPics() {
                this.listPictures = [
                    { url: 'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg', href: '' },
                    { url: 'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-2.jpg', href: '' },
                    { url: 'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg', href: '' }
                ]
                // this.$http.get('http://echo.jsontest.com/status/0').then(result => {
                //     if (result.body.status === '0') {
                //         this.listPictures = [
                //             { url: 'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg', href: '' },
                //             { url: 'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-2.jpg', href: '' },
                //             { url: 'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg', href: '' }
                //         ]
                //     } else {
                //         this.failed = true
                //     }
                // })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
