import { createRouter,createWebHashHistory } from "vue-router";
import login from '../views/login.vue'

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component:() => import ('@/views/login.vue')
    },
    {
        path:'/home',
        name:'home',
        component:() => import ('@/views/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router