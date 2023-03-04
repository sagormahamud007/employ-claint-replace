import { createBrowserRouter } from "react-router-dom";
import Home from "../commonPage/Home";
import Login from "../commonPage/Login";
import Register from "../commonPage/Register";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: '/', element : <MainLayout/>, children : [
        {
            path : '/', element : <Home/>
        },
        {
            path : '/register', element : <Register/>
        },
        {
            path : '/login', element : <Login/>
        }
    ]
  }
]);
export default router;