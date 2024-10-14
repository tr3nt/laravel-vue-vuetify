import { createRouter, createWebHistory } from 'vue-router'
import http from './axios'
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
        component: Home,
        meta: { requiresAuth: true }
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

// Protected routes
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        http.get('/api/auth')
            .then(response => {
                if (response.data)
                    next()
                else
                    router.push('/login')
            })
    } else {
        next()
    }
});

export default router;