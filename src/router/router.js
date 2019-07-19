import VueRouter from 'vue-router'
import Home from '../components/Home/index.vue'
import Pages from '../components/Pages/index.vue'
import Posts from '../components/Posts/index.vue'
import Favorites from '../components/Favorites/index.vue'

const router = new VueRouter({
    routes: [
        { path: '/home', component: Home },
        { path: '/pages', component: Pages },
        { path: '/posts', component: Posts },
        { path: '/favs', component: Favorites }
    ]
})

export default router