import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import ProductsByCategory from "../pages/ProductsByCategory";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products/category/:category",
        element: <ProductsByCategory />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/product/:id",
  //   element: <ProductDetail />,
  // },
  // {
  //   path: "/products/category/:category",
  //   element: <ProductsByCategory />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "*",
  //   element: <PageNotFound />,
  // },
]);

export default router;
