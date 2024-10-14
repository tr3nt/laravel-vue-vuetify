import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import http from '../axios'
import alertStore from './alert'

const authStore = defineStore('auth', () => {
    const logged = ref(false);
    const router = useRouter();
    const alert = alertStore();

    const auth = (type = false, redirect = false) => {
        http.get('/api/auth')
            .then(response => {
                logged.value = response.data
                if (response.data && redirect)
                    router.push(redirect)
                else if (type == 'logout' && redirect)
                    router.push(redirect)
            })
            .catch(error => {
                console.error(error.response.data.message)
            })
    };

    const login = form => {
        http.post('/api/login', form)
            .then(response => {
                auth('login', '/home')
            })
            .catch(error => {
                alert.setAlert('My Site', error.response.data.message, 'error')
            })
    };

    const logout = () => {
        http.post('/logout')
            .then(response => {
                auth('logout', '/')
            })
            .catch(error => {
                alert.setAlert('My Site', error.response.data.message, 'error')
            })
    };

    const register = form => {
        http.post('/api/register', form)
            .then(response => {
                alert.setAlert('My Site', 'User registration successfully')
                router.push('/login')
            })
            .catch(error => {
                alert.setAlert('My Site', error.response.data.message, 'error')
            })
    };

    return { logged, auth, login, logout, register }
});

export default authStore;