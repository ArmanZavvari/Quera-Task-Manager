import React from "react";
import icons from "../../../utils/icons/icons";

const BodyHeader = () => {
  return (
    <>
      <div className="flex justify-between border-b-[0.5px] border-gray-300 gap-4 py-4 items-center">
        <div className="flex flex-col flex-1">
          <div className="flex gap-4  ">
            <h2 className="border-l-[1px] border-gray-600 pl-4 text-right font-extrabold text-xl">
              پروژه اول
            </h2>
            <button className="flex border-l-[1px]  gap-[5px] border-gray-600 pl-4 text-right">
              {icons.list("#323232", "24px")}
              نمایش لیستی
            </button>
            <button className="flex border-l-[1px] gap-[5px] border-gray-600 pl-4 text-right">
              {icons.grid("#323232", "24px")}
              نمایش ستونی
            </button>
            <button className=" flex border-l-[1px] gap-[5px] border-gray-600 pl-4 text-right">
              {icons.calender_full("#323232", "24px")}
              تقویم
            </button>
          </div>
        </div>
        <button className=" flex gap-[5px]">
          {icons.share("#323232", "24px")}
          اشتراک‌گذاری
        </button>
      </div>
      <div className=" border-b-[0.5px] border-gray-300 py-4">
        <div className="flex justify-between    h-[28px] ">
          <div className="flex gap-[40px]">
            <div className="flex relative pl-4 gap-1  border-l border-gray-300">
              <input
                type="text"
                placeholder="جستجو بین تسک‌ها"
                className="w-[200px] pl-4 pr-10 py-2 "
              />
              <div className="absolute inset-y-0 right-0 flex items-center  ">
                {icons.search("#323232", "24px")}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex gap-4">
                {icons.filter("#323232", "24px")}
                فیلترها
              </button>
              <button className="px-3 py-1 bg-blue-100 rounded-md text-blue-600">
                دسته‌بندی‌شده با: وضعیت
              </button>
            </div>
          </div>
          <button className="flex items-center border border-solid border-blue-500 w-auto h-auto px-8 py-4 rounded-lg gap-6">
            {icons.refresh("#323232", "24px")}
            بازگردانی تسک های آرشیو شده
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyHeader;