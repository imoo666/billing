<template>
  <view class="flex items-center bg-bohe !text-[white] py-[8px]">
    <uni-icons type="arrow-left" size="25" class="!text-[white] mx-[20px]"></uni-icons>
    <view class="text-[20px] font-light flex-1">添加交易</view>
    <uni-icons type="checkmarkempty" size="20" class="!text-[white] mx-[20px]"></uni-icons>
  </view>
  <view class="px-[30px]">
    <view class="flex justify-between my-[15px]">
      <DyLabel :list="billingTypeOptions" v-model="billingType"></DyLabel>
    </view>
    <view class="text-[#fe717b] text-[40px]" :style="{ borderBottom: '1px solid #f3f3f3' }">0</view>

    <view class="flex justify-between my-[15px] flex-wrap gap-y-[10px]">
      <DyLabel type="red" :list="consumeTypeOptions" v-model="consumeType"></DyLabel>
    </view>
    <view>
      <view class="text-[#c5c5c5] text-[10px] mb-[2px] font-light">备注</view>
      <input placeholder="点击添加备注" placeholderClass="text-[#c1c1c1]" />
    </view>
  </view>
</template>
<script setup lang="ts">
import DyLabel from '@/components/DyLabel.vue'
import { billingTypeOptions, consumeTypeOptions } from '@/constants/options'
import { ref } from 'vue'
const billingType = ref('out')
const consumeType = ref('day')
</script>
