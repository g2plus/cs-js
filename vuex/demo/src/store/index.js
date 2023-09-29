import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        showNum(state) {
            return '当前最新的数量是【' + state.count + '】'
        },
        // showNum: state => {
        //     return '当前最新的数量是【'+ state.count +'】'
        // }
    },
    mutations: {
        add(state) {
            state.count++
        },
        addN(state, step) {
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }

    },
    actions: {
        //通过上下问去调用mutations里面的方法
        addAsync(context) {
            setTimeout(() => {
                // 在 actions 中，不能直接修改 state 中的数据；
                // 必须通过 context.commit() 触发某个 mutation 才行
                context.commit('add')
            }, 200)
        },
        addNAsync(context, step) {
            setTimeout(() => {
                // 在 actions 中，不能直接修改 state 中的数据；
                // 必须通过 context.commit() 触发某个 mutation 才行
                context.commit('addN', step)
            }, 200)
        },
        subAsync(context) {
            setTimeout(() => {
                // 在 actions 中，不能直接修改 state 中的数据；
                // 必须通过 context.commit() 触发某个 mutation 才行
                context.commit('sub')
            }, 200)
        },
        subNAsync(context, step) {
            setTimeout(() => {
                // 在 actions 中，不能直接修改 state 中的数据；
                // 必须通过 context.commit() 触发某个 mutation 才行
                context.commit('subN', step)
            }, 200)
        },
    },
    modules: {}
})
