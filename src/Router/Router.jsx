
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
import Update from "../Component/Update/Update";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
         loader: () =>fetch('https://hotel-book-server-project.vercel.app/rooms')
        },

        {
          path: "/rooms/:id",
         element: <RoomDetails></RoomDetails>,
         loader: ({params}) => fetch(`https://hotel-book-server-project.vercel.app/rooms/${params.id}`)
        },

        {
          path: "/my-booking",
          element: <PrivateRouter><MyBook></MyBook></PrivateRouter>,
        },

        {
          path: "/review/:id",
          element: <PrivateRouter><Review></Review></PrivateRouter>,
          loader: ({params}) => fetch(`https://hotel-book-server-project.vercel.app/review/${params.id}`)
        },


        {
          path: "/update/:id",
          element: <PrivateRouter><Update></Update></PrivateRouter>,  
          loader: ({params}) => fetch(`https://hotel-book-server-project.vercel.app/update/${params.id}`)
          
        },




      ]
    },
  ]);

export default router;