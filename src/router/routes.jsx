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
        element: <Details />,
      },
      {
        path: "/blogs/:id",
        element: <Blogs />,
      },
      {
        path: "/purchase_details",
        loader: ()=> fetch("service.json"),
        element: <PurchaseDetails />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },
]);

export default router;