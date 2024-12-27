import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
