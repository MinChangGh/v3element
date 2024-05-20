<template>
    <div class="not-found">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

import { ref } from 'vue'
setup() {
    const msg = ref('404 没找到页面')
    return {
        msg
    }
}


</script>