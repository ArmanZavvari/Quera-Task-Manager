import React from "react";
import icons from "../../../src/utils/icons/icons";
import ProfilePicture from "../common/profilePicture/profilePicture";

const ListComponent = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("Fa-Ir", {
    day: "numeric",
    month: "long",
  });

  return (
    <div dir="rtl" className="flex flex-col w-[986px]">
      <div className="flex items-center">
        {icons.chevron_down_circle("#323232", "20px")}
        <button className="bg-pink-500 text-white border rounded-md py-1 px-3">
          pending
        </button>
      </div>
      <div className="flex items-center justify-between rounded-md bg-slate-100  h-[47px] mt-5 ">
        <div className="flex items-center w-[493px]">
          <span className="w-4 h-4 rounded bg-pink-500"></span>
          <p className="text-base leading-6 text-right">
            این یک تیتر برای این تسک است.
          </p>
        </div>
        <div className="flex items-center justify-between w-[493px]">
          <div className="flex w-[70px] relative ">
            <div className="flex rounded-full border border-gray-300 absolute left-8">
              <ProfilePicture
                imgHeight="33px"
                imgWidth="32px"
                firstName="Mamad"
                lastName="bamali"
              />
            </div>
            <div className=" flex rounded-full border border-gray-300 absolute right-0 ">
              <ProfilePicture imgHeight="33px" imgWidth="32px" />
            </div>
          </div>
          <p>{formattedDate}</p>
          <span>{icons.flag("red", "20px")}</span>
          <span className="ml-5">{icons.paragraph("#BDC0C6", "20px")}</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md bg-slate-100  h-[47px] mt-5 ">
        <div className="flex items-center w-[493px]">
          <span className="w-4 h-4 rounded bg-pink-500"></span>
          <p className="text-base leading-6 text-right">
            این یک تیتر برای این تسک است.
          </p>
        </div>
        <div className="flex items-center justify-between w-[493px]">
          <div className="flex relative">
            <ProfilePicture
              imgHeight="33px"
              imgWidth="32px"
              className=" my-10 z-1 absolute left-0 top-0"
            />
          </div>
          <p>{formattedDate}</p>
          <span>{icons.flag("red", "20px")}</span>
          <span className="ml-5">{icons.paragraph("#BDC0C6", "20px")}</span>
        </div>
      </div>

      <div className="flex items-center mt-20">
        {icons.chevron_down_circle("#323232", "20px")}
        <button className="bg-pink-500 text-white border rounded-md py-1 px-3">
          pending
        </button>
      </div>
    </div>
  );
};

export default ListComponent;

// import React from 'react';

// const ListComponent = () => {
//   return (
//     <div className="relative">
//       <img src='./' alt="عکس پروفایل 1" className="w-24 h-24 rounded-full border border-gray-300" />
//       <img src='' alt="عکس پروفایل 2" className="w-24 h-24 rounded-full border border-gray-300 absolute top-0 left-12" />
//     </div>
//   );
// };

// export default ListComponent;
