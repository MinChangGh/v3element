<template>
    <div class="not-found">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup>

import { ref } from 'vue'
const msg = ref('404 没找到页面')



</script>