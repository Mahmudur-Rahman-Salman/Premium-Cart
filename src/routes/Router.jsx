import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "./../pages/Products/Products";
import SingleProductInfo from "../pages/SingleProduct/SingleProductInfo";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
