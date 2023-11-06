
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Accounts/Login/Login";
import Registation from "../Accounts/Registation/Registation";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
         element: <Home></Home>,
        },

        {
          path: "/login",
         element: <Login></Login>
        },

        {
          path: "/registation",
         element: <Registation></Registation>
        }



      ]
    },
  ]);

export default router;