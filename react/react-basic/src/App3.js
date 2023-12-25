//useEffect是一个React Hook函数，
//用于在React组件中创建不是由事件引起而是由渲染本身引起的操作（副作用）, 比 如发送AJAX请求，更改DOM等等 

//> 在组件渲染完毕之后，立刻从服务端获取频道列表数据并显示到页面中

//useEffect(()=>{},[])
//1. 参数1是一个函数，可以把它叫做副作用函数，在函数内部可以放置要执行的操作 
//2. 参数2是一个数组（可选参），在数组里放置依赖项，不同依赖项会影响第一个参数函数的执行，当是一个空数组的时候，副作用函数只会在组件渲染完毕之后执行一次   

import { useEffect, useState } from "react"

function Son () {
    // 1. 渲染时开启一个定时器
    useEffect(() => {
      const timer = setInterval(() => {
        console.log('定时器执行中...')
      }, 1000)
  
      return () => {
        // 清除副作用(组件卸载时)
        clearInterval(timer)
      }
    }, [])
    return <div>this is son</div>
  }


const App3=()=>{
    // 通过条件渲染模拟组件卸载
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  )
}
export default App3;