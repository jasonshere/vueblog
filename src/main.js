import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "./router/router.js"
Vue.use(VueRouter)

import './common/css/app.scss'
import app from './App.vue'

import { 
    MdDialogAlert, 
    MdDialog, 
    MdBottomBar, 
    MdButton, 
    MdIcon, 
    MdBadge, 
    MdToolbar, 
    MdDrawer, 
    MdList, 
    MdContent, 
    MdCard,
    MdAvatar,
    MdDivider,
    MdTable,
    MdField,
    MdRipple
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdBottomBar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdBadge)
Vue.use(MdToolbar)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdDialogAlert)
Vue.use(MdDialog)
Vue.use(MdAvatar)
Vue.use(MdDivider)
Vue.use(MdTable)
Vue.use(MdField)
Vue.use(MdRipple)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import moment from 'moment'

new Vue({
    el: "#app",
    router,
    render: createElement => createElement(app)
})