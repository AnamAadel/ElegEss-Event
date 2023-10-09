import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import Home from "../pages/Home";
import PurchaseDetails from "../pages/PurchaseDetails";


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
    ]
  },
]);

export default router;