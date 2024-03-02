import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Dashsidebar from "./dash sidebar/dashsidebar";
import Profilesidebar from "./profile sidebar/profilesidebar";
import icons from "../../../utils/icons/icons";

const SmartSidebar: React.FC = () => {
  const [side, setSide] = useState("dashboard");

  useEffect(() => {
    if (currentUrl.pathname.startsWith("/profile")) {
      setSide("profile");
    }
  }, []);
  const currentUrl = useLocation();

  return (
    <div
      dir="rtl"
      className="flex flex-col justify-between item-center bg-white p-4 border-l-2 absolute top-0  w-[340px] h-[100vh]"
    >
      <div className="flex flex-col">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-400  font-extrabold text-4xl leading-[45.09px] text-center mt-5">
          کوئرا تسک منیجر
        </h1>
        <div className="self-end my-10">
          {side === "dashboard" ? <Dashsidebar /> : <Profilesidebar />}
        </div>
      </div>
      {side === "dashboard" && (
        <div>
          <div>
            <button className="flex justify-start items-center gap-1 mb-5 mr-2">
              <span className="sq1"></span>
              <p>نیلوفر</p>
            </button>
          </div>
          <div className="flex justify-between">
            <button className="flex justify-center items-center gap-1 bg-white p-1 px-2 rounded-md text-gray-500">
              {icons.door("#818181", "20px")}
              خروج
            </button>
            <button>{icons.sun("gray", "20px")}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartSidebar;
