<template>
    <v-app>
        <Menu />
        <v-main>
            <v-container>
                <router-view />
                <Alert />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import authStore from './modules/auth'
import Menu from './components/Menu.vue'
import Alert from './components/Alert.vue'

const store = authStore();

onMounted(() => {
    store.auth()
});
</script>