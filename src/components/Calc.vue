<template>
  <view class="h-full">
    <view class="py-[10px] text-bohe text-[35px] flex">
      <view class="w-[25%] flex justify-center items-center shrink-0">￥</view>
      <view class="flex-1">{{ inputValue }}</view>
      <view></view>
    </view>
    <view class="flex">
      <view class="calc-cell" @click="input('clear')">C</view>
      <view class="calc-cell" @click="input('÷')">÷</view>
      <view class="calc-cell" @click="input('×')">×</view>
      <view class="calc-cell" @click="input('delete')">
        <uni-icons type="clear" size="20"></uni-icons>
      </view>
    </view>
    <view class="flex">
      <view class="calc-cell" @click="input(1)">1</view>
      <view class="calc-cell" @click="input(2)">2</view>
      <view class="calc-cell" @click="input(3)">3</view>
      <view class="calc-cell" @click="input('-')">-</view>
    </view>
    <view class="flex">
      <view class="calc-cell" @click="input(4)">4</view>
      <view class="calc-cell" @click="input(5)">5</view>
      <view class="calc-cell" @click="input(6)">6</view>
      <view class="calc-cell" @click="input('+')">+</view>
    </view>
    <view class="flex">
      <view class="flex-1">
        <view class="flex">
          <view class="calc-cell" @click="input(7)">7</view>
          <view class="calc-cell" @click="input(8)">8</view>
          <view class="calc-cell" @click="input(9)">9</view>
        </view>
        <view class="flex">
          <view class="calc-cell"></view>
          <view class="calc-cell" @click="input(0)">0</view>
          <view class="calc-cell" @click="input('.')">.</view>
        </view>
      </view>
      <view
        class="w-[25%] flex items-center justify-center bg-bohe text-white text-[24px] active:bg-[#02b4a5]"
        @click="input(!isNaN(Number(inputValue)) ? 'enter' : '=')"
        >{{ !isNaN(Number(inputValue)) ? 'OK' : '=' }}</view
      >
    </view>
  </view>
  <uni-popup ref="message" type="message">
    <uni-popup-message
      type="error"
      message="最多只能输入12位哦"
      :duration="2000"
    ></uni-popup-message>
  </uni-popup>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { ref } from 'vue'
const emit = defineEmits(['getCalcValue'])

const inputValue = ref('0')
const instance = getCurrentInstance()
const input = (value: string | number) => {
  if (value === 'clear') {
    inputValue.value = '0'
    return
  }
  if (value === 'delete') {
    inputValue.value = inputValue.value.slice(0, -1)
    if (inputValue.value === '') {
      inputValue.value = '0'
    }
    return
  }
  if (value === '=') {
    const exp = inputValue.value.replaceAll('×', '*').replaceAll('÷', '/')
    inputValue.value = String(Number(eval(exp).toFixed(5)))
    return
  }
  if (value === 'enter') {
    emit('getCalcValue', Number(inputValue.value))
    return
  }
  if (inputValue.value.length >= 12) {
    ;(instance?.proxy?.$refs.message as any).open('top')
    return
  }
  // 如果为数字，且当前是0，那要去掉0
  if (typeof value === 'number' && inputValue.value === '0') {
    inputValue.value = inputValue.value.slice(0, -1)
  }
  // 如果最后为符号，且当前是符号，那要进行替换
  if (typeof value === 'string' && isNaN(Number(inputValue.value.at(-1)))) {
    inputValue.value = inputValue.value.slice(0, -1)
  }
  inputValue.value = inputValue.value + value
}
</script>
<style>
.calc-cell {
  flex: 1;
  padding: 15px 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e9e9e9;
}
.calc-cell:not(:last-child) {
  border-right: 1px solid #e9e9e9;
}
.calc-cell:active {
  background-color: #e8e8e8;
}
</style>
