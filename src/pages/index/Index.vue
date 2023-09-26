<template>
  <view class="content">
    <view class="text-area">
      <button type="primary" @click="jump">{{ title }}</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('跳转')
const jump = () => {
  uni.navigateTo({ url: '/pages/setting/Setting' })
}
</script>
