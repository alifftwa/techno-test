import React from "react";
import { Link } from "react-router-dom";
import { home1, menu2 } from "../../image";

const BottomNavHome = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10 flex justify-around py-2">
      <Link to="/dashboard">
        <div className="content-center justify-center items-center">
          <img src={home1} className="w-7" />
          <p className="text-black font-semibold  text-[11px]">Home</p>
        </div>
      </Link>
      <Link to="/menu">
        <img src={menu2} className="w-7" />
        <p className="text-black font-semibold text-[11px]">Menu</p>
      </Link>
    </div>
  );
};

export default BottomNavHome;
