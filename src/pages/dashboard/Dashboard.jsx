import React, { useEffect, useState } from "react";
import axios from "axios";
import HDashboard from "../../components/header/HDashboard";
import { bannerTechno, motif, qrRound, rightArrow } from "../../image";
import { Link } from "react-router-dom";
import BottomNavHome from "../../components/nav/BottomNavHome";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://soal.staging.id/api/home")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleButtonClick = () => {
    const section = document.getElementById("/dashboard/qrshow");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F8F9FB]">
      <HDashboard />
      <div
        className="text-black w-full py-7 px-7 bg-repeat"
        style={{ backgroundImage: `url(${motif})` }}
      >
        <div className="bg-white rounded-md px-5 py-5 shadow-lg">
          <div>
            <p>Good Afternoon,</p>
            <p className="font-bold">{data ? data.name : "Loading..."}</p>
          </div>

          <div className="flex gap-5 my-3">
            <div className="w-14 h-14 rounded-full bg-white justify-center align-middle object-center place-content-center place-items-center shadow-lg">
              <Link to="/dashboard/qrshow">
                <div className="">
                  <img
                    src={qrRound}
                    className="shadow-md justify-center place-items-center w-16 h-15 rounded-full"
                  />
                </div>
              </Link>
            </div>

            <div className="border-l-2 border-dashed border-gray-300 h-15"></div>

            <div className="pr-10">
              <div>saldo</div>
              <div>points</div>
            </div>
            <div className="font-bold">
              <div>
                <p>{data ? `Rp ${data.saldo}` : "Loading..."}</p>
              </div>
              <div>
                <p className="text-gray-400">
                  {data ? data.point : "Loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black pb">
        <div>
          <img src={bannerTechno} />
        </div>

        <div className="flex w-full h-8 content-center bg-white shadow-sm">
          <div className="w-5/6 mx-3 flex items-center justify-start space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex gap-3 w-2/6 justify-center text-black">
            <div className="content-center">
              <p className="text-gray-400">View all</p>
            </div>
            <div className="w-3 content-center">
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <BottomNavHome />
    </div>
  );
};

export default Dashboard;
