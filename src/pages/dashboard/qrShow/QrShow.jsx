import React, { useState } from "react";
import { qrSquare, reject } from "../../../image";
import { Link } from "react-router-dom";

const QrShow = () => {
  return (
    <>
      <div className="flex font-bold text-black">
        <div className="w-5/6"></div>
        <div className="w-1/6 py-3 flex justify-center items-center">
          <Link to="/dashboard">
            <div>
              <img src={reject} className="w-7" />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full h-screen content-center align-middle">
        <div className="w-full text-center text-black">
          <p className="font-semibold">Show the QR Code below to the cashier</p>
        </div>
        <div>
          <img src={qrSquare} alt="" />
        </div>
      </div>
    </>
  );
};

export default QrShow;
