
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Accounts/Login/Login";
import Registation from "../Accounts/Registation/Registation";
import Room from "../Pages/Room/Room";
import RoomDetails from "../Pages/Room/RoomDetails/RoomDetails";

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
        },

        {
          path: "/rooms",
         element: <Room></Room>,
         loader: () =>fetch('http://localhost:5000/rooms')
        },

        {
          path: "/rooms/room-details/:id",
         element: <RoomDetails></RoomDetails>
        }





      ]
    },
  ]);

export default router;