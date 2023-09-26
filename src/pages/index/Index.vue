<template>
  <view>
    <view></view>
    <view></view>
    <div>123</div>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const title = ref('跳转')
const jump = () => {
  uni.navigateTo({ url: '/pages/setting/Setting' })
}
</script>
