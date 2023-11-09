
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Accounts/Login/Login";
import Registation from "../Accounts/Registation/Registation";
import Room from "../Pages/Room/Room";
import RoomDetails from "../Pages/Room/RoomDetails/RoomDetails";
import MyBook from "../Pages/MyBook/MyBook";
import PrivateRouter from "./PrivateRouter";
import Review from "../Component/Review/Review";

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
          path: "/rooms/:id",
         element: <RoomDetails></RoomDetails>,
         loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
        },

        {
          path: "/my-booking",
          element: <PrivateRouter><MyBook></MyBook></PrivateRouter>,
        },

        {
          path: "/review/:id",
          element: <PrivateRouter><Review></Review></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
        }

      ]
    },
  ]);

export default router;