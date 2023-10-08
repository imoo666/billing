export interface BillingTypeOption {
  text: string
  value: string
  disabled?: boolean
}
export const billingTypeOptions: BillingTypeOption[] = [
  { text: '支出', value: 'out' },
  { text: '收入', value: 'in' },
  { text: '待定', value: '-', disabled: true }
]

export const consumeTypeOptions: BillingTypeOption[] = [
  { text: '日用', value: 'day' },
  { text: '餐饮', value: 'eat' },
  { text: '房租', value: 'live' },
  { text: '礼金', value: 'gift' },
  { text: '旅行', value: 'tour' },
  { text: '游戏', value: 'game' },
  { text: '其他', value: 'other' }
]
