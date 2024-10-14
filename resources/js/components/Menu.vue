<template>
    <v-app-bar class="px-3">
        <v-btn to="/" v-if="!store.logged">Home</v-btn>
        <v-btn to="/home" v-if="store.logged">Home</v-btn>
        <v-spacer />
        <v-btn to="/login" v-if="!store.logged">Login</v-btn>
        <v-btn @click="store.logout" v-if="store.logged">Logout</v-btn>
        <v-btn to="/register" v-if="!store.logged">Register</v-btn>
    </v-app-bar>
</template>

<script setup>
import authStore from '../modules/auth'

const store = authStore();
</script>