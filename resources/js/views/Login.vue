<template>
    <v-row justify="center" class="mt-5">
        <v-col cols="6">
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        label="Email"
                        v-model="form.email"
                        variant="outlined"
                        type="email"
                        autofocus
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        label="Password"
                        v-model="form.password"
                        variant="outlined"
                        type="password"
                    />
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn
                        text="Login"
                        @click="store.login(form)"
                        variant="outlined"
                        type="button"
                    />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue'
import authStore from '../modules/auth'

const store = authStore();
const form = ref({
    email: null,
    password: null
});
</script>