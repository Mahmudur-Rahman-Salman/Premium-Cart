import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from './../pages/Products/Products';
import SingleProductInfo from "../pages/SingleProduct/SingleProductInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <SingleProductInfo></SingleProductInfo>,
      },
    ],
  },
]);
