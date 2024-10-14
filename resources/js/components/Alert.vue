<template>
    <v-alert
        v-model="store.alert.visible"
        :text="store.alert.text"
        :title="store.alert.title"
        :type="store.alert.type"
        class="mt-3"
        closable
    />
</template>

<script setup>
import alertStore from '../modules/alert'

const store = alertStore();
</script>