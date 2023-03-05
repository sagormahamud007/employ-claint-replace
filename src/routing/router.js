import { createBrowserRouter } from "react-router-dom";
import AllUser from "../Admin/allUserInfo/AllUser";
import SingleuserInfo from "../Admin/SingleuserInfo";
import Home from "../commonPage/Home";
import Login from "../commonPage/Login";
import Register from "../commonPage/Register";
import AddedCast from "../Employ/cast/AddedCast";
import Profile from "../Employ/profile/Profile";
import MainLayout from "../layout/MainLayout";
import AdminRouting from "./AdminRouting";
import Privetrouting from "./PrivetRouting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addcast",
        element: (
          <Privetrouting>
            {" "}
            <AddedCast />{" "}
          </Privetrouting>
        ),
      },
      {
        path: "/profile",
        element: (
          <Privetrouting>
            {" "}
            <Profile />{" "}
          </Privetrouting>
        ),
      },
      {
        path: "/adminpannel",
        element: (
          <AdminRouting>
            {" "}
            <AllUser />{" "}
          </AdminRouting>
        ),
      },
      {
        path: "/adminpannel/users/:id",
        element: (
          <AdminRouting>
            {" "}
            <SingleuserInfo />{" "}
          </AdminRouting>
        ),
        loader : ({params})=> fetch(`http://localhost:5000/admin/user-info/${params.id}`)
      },
    ],
  },
]);
export default router;
