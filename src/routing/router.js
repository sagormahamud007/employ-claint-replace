import { createBrowserRouter } from "react-router-dom";
import Home from "../commonPage/Home";
import Login from "../commonPage/Login";
import Register from "../commonPage/Register";
import AddedCast from "../Employ/cast/AddedCast";
import Profile from "../Employ/profile/Profile";
import MainLayout from "../layout/MainLayout";
import Privetrouting from "./PrivetRouting";



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
        },
        {
            path : '/addcast', element : <Privetrouting> <AddedCast/>  </Privetrouting>
        },
        {
            path : '/profile', element :  <Privetrouting> <Profile/> </Privetrouting> 
        },
    ]
  }
]);
export default router;