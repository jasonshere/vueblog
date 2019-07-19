<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-50" v-for='item in articles' :key="item">
            <md-card>
                <md-card-area>
                    <md-card-media>
                    <img src="https://vuematerial.io/assets/examples/card-image-1.jpg" alt="People">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-subhead">Subtitle here</div>
                    </md-card-header>

                    <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </md-card-content>
                </md-card-area>
            </md-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LayoutHorizontalResponsive',
        data: () => {
            return {
                'articles': [
                    1, 2, 3, 4
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-layout {
        margin-top: 10px;
        padding: 10px;
    }
    .md-layout-item {
        margin-bottom: 10px;
    }
</style>