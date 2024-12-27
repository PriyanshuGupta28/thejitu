import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Ios from "../pages/Ios/Ios";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ios" element={<Ios />} />
    </Routes>
  );
};

export default AllRoutes;
