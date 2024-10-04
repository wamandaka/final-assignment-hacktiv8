import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
    // <Home />
  );
};

export default MainLayout;
