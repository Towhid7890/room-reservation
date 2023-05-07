import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DashboardLayout from "../Main/DashboardLayout";
import Welcome from "../Dashboard/Welcome";
import Room from "../Dashboard/Room";
import Guest from "../Dashboard/Guest";
import Booking from "../Dashboard/Booking";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]

  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'',
        element:<Welcome></Welcome>
      },
      {
        path:'/dashboard/room',
        element:<Room></Room>
      },
      {
        path:'/dashboard/guest',
        element:<Guest></Guest>
      },
      {
        path:'/dashboard/booking',
        element:<Booking></Booking>
      },
      

    ]
  },
])
export default routes;