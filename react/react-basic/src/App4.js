import React, { useState, useEffect } from 'react';  
import axios from 'axios';

const App4= () => {  
  const [listData, setListData] = useState([]);  
  
  useEffect(() => {  
    // 发起GET请求获取数据  
    axios.get('http://geek.itheima.net/v1_0/channels')  
      .then(response => {  
        //console.log(response.data.data.channels.length)
        // 请求成功，将数据保存到state中  
        setListData(response.data.data.channels);  
      })  
      .catch(error => {  
        // 处理请求错误  
        console.error('Error fetching list data:', error);  
      });  
  }, []); // 空数组作为依赖项，表示只在组件挂载时执行一次请求  
  
  return (  
    <div>  
      <h2>List Data:</h2>  
      <ul>
      {listData.map(item=><li key={item.id}>{item.name}</li>)} 
      </ul>  
    </div>  
  );  
};  
  
export default App4;