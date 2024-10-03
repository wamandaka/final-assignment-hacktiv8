import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import MainLayout from "./layouts/MainLayout";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/product/electronic",
    element: <div>electronic</div>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
