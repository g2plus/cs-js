import {Outlet,Link} from "react-router-dom"
import img from "./assets/background.jpg"
import "./App.css"
function App() {
  return (
    <div>
      <img src={img} alt="" className='imgCss'/>
        <Link to="/bg">音乐</Link>
        <div>
          <Link to="/bg/movie">电影</Link>
        </div>
        {/*二级路由出口*/}
        <Outlet/>
    </div>
  );
}

export default App;
