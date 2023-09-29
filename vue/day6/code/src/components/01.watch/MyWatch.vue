<template>
  <div>
    <h3>watch 侦听器的用法</h3>
    <input type="text" class="form-control" v-model.trim="info.username" />
  </div>
</template>

<script>
//导入axios发起请求
import axios from 'axios'

export default {
  name: 'MyWatch',
  data() {
    return {
      username: 'admin',
      info: {
        username: 'zs',
        age: 20,
      },
    }
  },
  //监听到数据变化触发
  watch: {
    'info.username': {
      async handler(newVal) {
        const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
        console.log(res)
      },
    },
  },
}
</script>

<style lang="less" scoped></style>
