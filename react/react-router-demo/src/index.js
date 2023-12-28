import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import MyRouter from "./routes/MyRouter"
import MyErrorPage from "./views/error-page"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
//声明路由
const router = createBrowserRouter([
    {
        path: "/",
        element: <MyRouter/>,
        errorElement:<MyErrorPage/>
    },
    {
        path:"/bg",
        element:<App/>,
        errorElement:<MyErrorPage/>
    },
    // {
    //     path:"/contacts/1",
    //     errorElement:<MyErrorPage/>
    // },
    // {
    //     path:"/contacts/2",
    //     errorElement:<MyErrorPage/>
    // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
