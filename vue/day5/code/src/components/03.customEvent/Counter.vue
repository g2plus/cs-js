<template>
  <div>
    <p>count的值是:{{ number }}</p>
    <button @click="add">+1</button>
    <!--动态组件-->
    <span><button @click="minus">-1</button></span>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  // 1. 声明自定义事件(暴露事件)
  emits: ['countAdd', 'countMinus'],
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    add() {
      this.number++
      // 2. this.$emit() 触发自定义事件 传输结果
      this.$emit('countAdd', this.number)
    },
    minus() {
      this.number--;
      if (this.number < 0) {
        console.log("reset value to zero");
        this.number = 0;
        this.$emit("countMinus", this.number);
      }
      this.$emit("countMinus", this.number);
    }
  },
}
</script>

<style></style>
