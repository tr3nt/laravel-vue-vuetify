<template>
    <v-row>
        <v-col>
            <h3>Welcome {{ user?.name }}</h3>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import http from '../axios'

const user = ref({});

onMounted(() => {
    http.get('/api/user')
        .then(response => {
            user.value = response.data
        })
});
</script>