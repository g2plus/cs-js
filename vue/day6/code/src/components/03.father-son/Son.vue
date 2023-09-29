<template>
  <div>
    <h3>Son 子组件 --- {{ num }}</h3>
    <button type="button" class="btn btn-danger" @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MySon',
  props: ['num'],
  //子向父传值
  emits: ['update:num'],
  methods: {
    add() {
      this.$emit('update:num', this.num + 1)
    },
  },
}
</script>

<style lang="less" scoped></style>
