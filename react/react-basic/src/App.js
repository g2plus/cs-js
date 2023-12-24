import "./index.css"
import React from 'react';

//jsx
const message="Hello world!"


function getAge(){
  return 18
}


const list = [
  {
    id:1000,
    name:"语文"
  },
  {
    id:1001,
    name:"数学"
  },
  {
    id:1002,
    name:"英语"
  }
]

//codition rendering
const flag = true
const loading = true


const type = 3  // 0|1|3

function getArticleJSX(){
  if(type === 0){
    return <div>无图模式模版</div>
  }else if(type === 1){
    return <div>单图模式模版</div>
  }else if(type === 3){
    return <div>三图模式模版</div>
  }
}

function Button(){
  return <button>click me</button>
}

function App() {
  const [ count,setCount] = React.useState(0)
  const [ cnt,setCnt ] = React.useState(0)
  const handleClick=()=>{
    setCnt(cnt+1)
  }
  return (
    <div>
      <ul>
        <li>
        {message}
        </li>
        <li>
        {getAge()}
        </li>
        <li>
        {"Why react?"}
        </li>
      </ul>
      <ul>{list.map(item=><li key={item.id}>{item.name}</li>)}</ul>
      <ul>
        <input readOnly type='radio' checked value={list[0].id}/>{list[0].name}
      </ul>
      <>
      {flag && <div>this is div</div>}
      {loading ? <div>loading...</div>:<div>this is div</div>}
      </>
      <div style={{backgroundColor: "pink", fontSize: "16px", padding: "10px", marginTop:"10px"}} >
      {getArticleJSX()}
      </div>
      <div className="foo">
      {getArticleJSX()}
      </div>
      <div>
        <Button/>
      </div>
      <div>
      <button onClick={()=>setCount(count+1)}>{ count }</button>
      </div>
      <div>
      <button onClick={handleClick}>{ cnt }</button>
      </div>
    </div>
  );
}

export default App;
