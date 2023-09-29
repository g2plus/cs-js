<template>
  <div>
    <h1>App 根组件</h1>
    <hr />
    <!--传递数据给子组件-->
    <!-- <my-count count="abc" state="3"></my-count> -->
    <my-count state="true" info="abc" type="unknown"></my-count>

  </div>
</template>

<script>
import MyCount from './Count.vue'

export default {
  name: 'MyApp',
  components: {
    MyCount,
  },
}
</script>
