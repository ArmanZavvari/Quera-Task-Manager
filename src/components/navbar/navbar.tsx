import React from "react";
// import { Link } from "react-router-dom";
// import "../../styles/yekan font/yekan";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <ul className="flex items-center">
        <li>
          <button className="bg-teal-500  text-white hover:bg-green-600 w-24 h-10 rounded-md p-2 mr-1">
            ثبت نام
          </button>
        </li>
        <li>
          <p className=" font-medium text-base leading-[22.55px] text-right hover:text-gray-30 hover:cursor-pointer">
            ثبت نام نکرده ای؟
          </p>
        </li>
      </ul>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500  font-extrabold text-2xl leading-[45.09px]">
        کوئرا تسک منیجر
      </h1>
    </div>
  );
};
export default Navbar;
// export {};
