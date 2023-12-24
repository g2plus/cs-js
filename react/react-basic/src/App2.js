import {useState,useRef,createContext, useContext} from 'react'

//父->子
function Son(props){
    return <div style={{backgroundColor:'pink'}}>{ props.name }</div>
}

//子->父
function Son2({onGetMsg}){
    const nameSon = "This is a son message";
    return (
      <div>
        {/* 在子组件中执行父组件传递过来的函数 */}
        <button onClick={()=>onGetMsg(nameSon)}>send</button>
        <div>son message:{nameSon}</div>
      </div>
    )
}


//兄弟节点
function A ({ onGetAName }) {
    // Son组件中的数据
    const name = 'this is A name'
    return (
      <div>
        {/* 调用父组件的函数 */}
        this is A compnent,
        <button onClick={() => onGetAName(name)}>send</button>
      </div>
    )
}
  
function B ({ name }) {
    return (
      <div>
        this is B compnent,
        <div>{name}</div>
      </div>
    )
}


// App -> A -> B

// 1. createContext方法创建一个上下文对象

const MsgContext = createContext()


function A1 () {
  return (
    <div>
      this is A1 component
      <B1 />
    </div>
  )
}

function B1 () {
  // 3. 在底层组件 通过useContext钩子函数使用数据
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B1 compnent,{msg}
    </div>
  )
}


function App2() {
    
    const [value, setValue] = useState('啥也不是')

    const changeHandler=(e)=>{
        //受控输入框赋值
        setValue(e.target.value)
    }

    const inputRef = useRef(null)

    const onChange = ()=>{
        //非受控输入框赋值
        //输入的内容没有在html标签体中显示 F12查看
        console.log(inputRef.current.value)
    }


    const name = '父给子传递参数'

    //子传父(子组件的sonMsg=>msg)
    const [nameSon,setNameSon] = useState('')

    const getMsg = (nameSon)=>{
        console.log(nameSon);
        setNameSon(nameSon);
    }


    //兄弟节点传值
    const [nameA, setNameA] = useState('')

    const getAName = (nameA) => {
      setNameA(nameA)
    }

    const topMsg = 'This is top app message';

    return (
        <>
        {/* 受控输入框赋值 */}
        <input 
            type="text" 
            value={value} 
            onChange={changeHandler}
        />
        <hr/>
        <input 
            type="text" 
            name='inputRef'
            ref={inputRef}
            onChange={onChange}
        />
        <Son name={name}/>
        
        <div>
        {/* 传递父组件中的函数到子组件 控制台输出子组件的msg */}
        <Son2 onGetMsg={ getMsg }/>
        {nameSon}
        </div>

        <div>
            this is App
            {/* 传递父组件中的函数到子组件 */}
            <A onGetAName={getAName} />
            <B name={nameA} />
        </div>

        {/* 跨层组件通信 */}
        <div>
          {/* 2. 在顶层组件 通过Provider组件提供数据 */}
          <MsgContext.Provider value={topMsg}>
          this is App
          <A1 />
          </MsgContext.Provider>
        </div>
        </>
      
    )
}

export default App2;
