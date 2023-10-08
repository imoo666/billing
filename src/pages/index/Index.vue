<template>
  <view class="bg-[#f2f4fb] h-full">
    <!-- <uni-nav-bar backgroundColor="#00c4b3" :border="false"></uni-nav-bar> -->
    <view class="h-[100px] !rounded-[20px]">当月支出{{ price }}</view>
    <view class="h-[100px] !rounded-[20px]">昨日交易</view>
    <view class="h-[100px] !rounded-[20px]">9月预算</view>

    <!-- 计算器弹窗 -->
    <uni-popup ref="popup" background-color="#fff">
      <view class="popup-content">
        <Calc @getCalcValue="getCalcValue"></Calc>
      </view>
    </uni-popup>

    <uni-fab
      @click="openCalc"
      class="bg-[black]"
      horizontal="right"
      :pattern="{ buttonColor: '#00c4b3' }"
    ></uni-fab>
  </view>
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import Calc from '@/components/Calc.vue'
import { ref } from 'vue'

const instance = getCurrentInstance()
const price = ref(0)

const openCalc = () => {
  ;(instance?.proxy?.$refs.popup as any).open('bottom')
}
const getCalcValue = (value: number) => {
  price.value = value
  ;(instance?.proxy?.$refs.popup as any).close()
}
</script>
