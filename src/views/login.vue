<template>
    <div class="login">
        <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    </div>
</template>
<script setup>
import { ref } from 'vue'


const input = ref('')
</script>