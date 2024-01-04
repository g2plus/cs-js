import {Link, Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            我是一级路由layout组件
            <div>
                <Link to="/">面板</Link>
            </div>
            <div>
                <Link to="/about">关于</Link>
            </div>

            {/* 配置二级路由的出口 */}
            <Outlet/>
        </div>
    )
}

export default Layout