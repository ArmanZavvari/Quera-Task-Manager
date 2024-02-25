import React from "react";
import icons from "../../../utils/icons/icons";

const BodyHeader = () => {
  return (
    <>
      <div className="flex justify-between border-b-[0.5px] border-gray-300 gap-4 py-4">
        <div className="flex flex-col flex-1">
          <ul className="flex gap-4  ">
            <li className="border-l-[1px] border-gray-500">پروژه</li>
            <li className="flex border-l-[1px] border-gray-500">
              {icons.list("#323232", "24px")}
              نمایش لیستی
            </li>
            <li className="flex border-l-[1px] border-gray-500">
              {icons.grid("#323232", "24px")}
              نمایش ستونی
            </li>
            <li className=" flex border-l-[1px] border-gray-500">
              {icons.calender_full("#323232", "24px")}
              تقویم
            </li>
          </ul>
        </div>
        <div className=" flex">
          {icons.share("#323232", "24px")}
          اشتراک‌گذاری
        </div>
      </div>
    </>
  );
};

export default BodyHeader;
