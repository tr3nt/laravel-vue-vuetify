import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const routes = [
    {
        path: '/',
        component: Index
    },{
        path: '/home',
        component: Home
    },{
        path: '/login',
        component: Login
    },{
        path: '/register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;