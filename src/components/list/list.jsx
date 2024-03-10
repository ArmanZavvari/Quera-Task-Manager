import React, { useState } from "react";
import icons from "../../utils/icons/icons";
import ProfilePicture from "../common/profilePicture/profilePicture";

const ListComponent = () => {
  const [showTasks, setShowTasks] = useState(false); 
  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  const now = new Date();
  const formattedDate = now.toLocaleDateString("Fa-Ir", {
    day: "numeric",
    month: "long",
  });
  

  return (
    <div dir="rtl" className="flex flex-col w-[986px] mt-4">
      <div className="flex items-center " >
        <div className="flex items-center w-[493px]">
          {icons.chevron_down_circle("#323232", "20px")}
          <button
            className="bg-pink-500 text-white border rounded-md py-1 px-3"
            onClick={toggleTasks} 
          >
            pending
          </button>
        </div>
        <div className="flex items-center justify-between w-[493px]">
          <p>اعضا</p>
          <p>ددلاین</p>
          <p>اولویت</p>
          <p>توضیحات</p>
        </div>
      </div>
      {showTasks && ( 
        <div>
          <div className="flex items-center justify-between rounded-md  h-[47px] mt-5">
            <div className="flex items-center w-[493px]">
              <span className="w-4 h-4 rounded bg-pink-500 ml-2"></span>
              <p className="text-base leading-6 text-right">
                این یک تیتر برای این تسک است.
              </p>
            </div>
            <div className="flex items-center justify-between w-[493px]">
              <div className="flex w-[70px] relative">
                <div className="flex rounded-full border border-gray-300 absolute left-8">
                  <ProfilePicture
                    imgHeight="33px"
                    imgWidth="32px"
                    firstName="Mamad"
                    lastName="bamali"
                  />
                </div>
                <div className=" flex rounded-full border border-gray-300 absolute right-0">
                  <ProfilePicture imgHeight="33px" imgWidth="32px" />
                </div>
              </div>
              <p>{formattedDate}</p>
              <span>{icons.flag("red", "20px")}</span>
              <span className="ml-5">
                {icons.paragraph("#BDC0C6", "20px")}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-md  h-[47px] mt-5">
            <div className="flex items-center w-[493px]">
              <span className="w-4 h-4 rounded bg-pink-500 ml-2"></span>
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
              <span className="ml-5">
                {icons.paragraph("#BDC0C6", "20px")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListComponent;
