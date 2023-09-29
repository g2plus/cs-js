<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <my-header title="Who are you?" bgcolor="red" color="white"></my-header>
    <!--使用全局定义的组件-->
    <my-swiper></my-swiper>
    <my-test></my-test>
  </div>
</template>

<script>
import MyHeader from './06.MyHeader/MyHeader.vue'

export default {
  name: 'MyApp',
  components: {
    MyHeader,
  },
}
</script>

<style lang="less" scoped>
.app-container {
  margin-top: 45px;
}
</style>
