<template>
  <view
    v-for="option in list"
    :key="option.value"
    class="py-[6px] px-[35px] rounded-[20px] flex justify-center items-center text-[14px] border"
    :style="calcColor(option.value)"
    @click="
      () => {
        if (option.disabled) {
          return
        }
        emit('update:modelValue', option.value)
      }
    "
    >{{ option.text }}</view
  >
</template>
<script setup lang="ts">
import type { BillingTypeOption } from '@/constants/options'
import { colorMap } from '@/constants/dy-label-map'
const props = withDefaults(
  defineProps<{
    list: BillingTypeOption[]
    modelValue?: string
    className?: string
    type?: string
  }>(),
  { type: 'green' }
)

const emit = defineEmits(['update:modelValue'])
const calcColor = (option: string) => {
  const { type, modelValue } = props
  const name = type + (modelValue === option ? '' : 'Unselected')
  const color = colorMap[name]
  return {
    backgroundColor: '#' + color?.background,
    color: '#' + color?.font,
    borderColor: '#' + color?.border
  }
}
</script>
