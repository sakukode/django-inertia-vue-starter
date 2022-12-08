<script setup>
defineProps({
    title: String,
    description: String
})
</script>

<template>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
</template>