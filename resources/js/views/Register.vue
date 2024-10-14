<template>
    <v-row justify="center" class="mt-5">
        <v-col cols="6">
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        label="Name"
                        v-model="form.name"
                        variant="outlined"
                        type="text"
                        autofocus
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        label="Email"
                        v-model="form.email"
                        variant="outlined"
                        type="email"
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
                <v-col cols="12">
                    <v-text-field
                        label="Confirm Password"
                        v-model="form.password_confirmation"
                        variant="outlined"
                        type="password"
                    />
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn
                        text="Register"
                        @click="store.register(form)"
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

const form = ref({
    name: null,
    email: null,
    password: null,
    password_confirmation: null
});
const store = authStore();
</script>