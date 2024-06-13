import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import QrShow from "../pages/dashboard/qrShow/QrShow";
import Menu from "../pages/menu/Menu";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<QrShow />} path="/dashboard/qrshow" />
        <Route element={<Menu />} path="/menu" />
      </Routes>
    </div>
  );
};

export default Routing;
