<template>
  <div>
    <p>数量:{{ count }}</p>
    <p>状态:{{ state }}</p>
    <p>信息:{{ info }}</p>
    <p>类别:{{ type }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  props: {
    count: {
      type: Number,
      required: false,
      default: 100
    },
    state: Boolean,
    info: [String, Number],
    type: {
      validator(value) {
        console.log(value)
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
}
</script>

<style lang="less" scoped></style>
