<template>
    <v-app>
        <Menu />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import Menu from './components/Menu.vue'
</script>