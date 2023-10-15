import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Purchases from "../pages/Purchases";
import Register from "../pages/Register";
import PablicRoute from "./PablicRoute";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><Details /></PrivateRoute> ,
      },
      {
        path: "/purchases",
        // loader: ()=> fetch("service.json"),
        element: <PrivateRoute><Purchases /></PrivateRoute> ,
      },
      {
        path: "/blogs/:id",
        element: <PrivateRoute><Blogs /></PrivateRoute> ,
      },
      {
        path: "/contact",
        element: <PrivateRoute><ContactUs /></PrivateRoute> ,
      },
      {
        path: "/register",
        element: <PablicRoute><Register /></PablicRoute> ,
      },
      {
        path: "/login",
        element: <PablicRoute> <Login /></PablicRoute>,
      },
    ]
  },
]);

export default router;