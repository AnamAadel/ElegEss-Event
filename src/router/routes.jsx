import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PurchaseDetails from "../pages/PurchaseDetails";
import Register from "../pages/Register";
import PablicRoute from "./PablicRoute";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <PrivateRoute><Details /></PrivateRoute> ,
      },
      {
        path: "/blogs/:id",
        element: <PrivateRoute><Blogs /></PrivateRoute> ,
      },
      {
        path: "/purchase_details",
        loader: ()=> fetch("service.json"),
        element: <PrivateRoute><PurchaseDetails /></PrivateRoute> ,
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