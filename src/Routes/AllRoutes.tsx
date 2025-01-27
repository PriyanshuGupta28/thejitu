import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Ios from "../pages/Ios/Ios";
import Hubilo from "../pages/Hubilo/Hubilo";
import ScrollRestoration from "../components/ScrollRestoration/ScrollRestoration";
import WeHive from "../pages/WeHive/WeHive";
import Qdesq from "../pages/Qdesq/Qdesq";

const AllRoutes: React.FC = () => {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/hubilo" element={<Hubilo />} />
        <Route path="/wehive" element={<WeHive />} />
        <Route path="/qdesq" element={<Qdesq />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
