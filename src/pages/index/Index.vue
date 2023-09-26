<template>
  <button type="primary" @click="jump">{{ title }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('跳转')
const jump = () => {
  uni.navigateTo({ url: '/pages/setting/Setting' })
}
</script>
