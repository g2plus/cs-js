<template>
  <div>
    <h1>app根组件{{val}}</h1>
    <hr/>
    <!--调用自定义事件-->
    <my-counter @countAdd="add" @countMinus="minus"></my-counter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'

export default {
  name: 'MyApp',
  data(){
    return {
      val:0
    }
  },
  methods: {
    //类似于window.addEventListener
    add(val){
      console.log('触发了 countChange 自定义事件', val)
      this.val=val;
    },
    minus(val){
      console.log('触发了 countChange 自定义事件', val)
      this.val=val;
    }
  },
  components: {
    MyCounter,
  },
}
</script>

<style></style>
