<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <h3>getters:{{ showNum }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-N</button>
    <button @click="subN(3)">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(5)">-N Async</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    //拓展运算符...
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandler1() {
      this.sub()
    },
    btnHandler2() {
      this.subN(3)
    },
    btnHandler3() {
      this.subAsync()
    },
    btnHandler4() {
      this.subNAsync(3)
    }
  }
}
</script>