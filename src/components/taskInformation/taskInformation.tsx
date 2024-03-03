import React, { useState } from "react";
import icons from "../../utils/icons/icons";
import ProfilePicture from "../common/profilePicture/profilePicture";
import Comment from "./comment/comment";

const TaskInformation: React.FC = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-[2px] z-10"
      dir="rtl"
    >
      <div className="bg-white pt-10 pr-3 rounded-xl w-[1352px]  flex flex-col justify-between ">
        <div className="flex h-[596px] justify-center w-full relative">
          <div className=" border-l  w-[50%] h-[100%]">
            <div className="flex justify-between items-center pl-4 border-b py-8 pt-16 ">
              <div className="flex items-center gap-x-4 pr-8">
                <button className="rounded bg-[#F84747] text-white text-xs px-[42px] py-2">
                  open
                </button>
                <div className="flex items-center">
                  <button className="z-20">
                    <ProfilePicture
                      firstName="mat"
                      lastName="ch"
                      imgHeight="36px"
                      imgWidth="36px"
                    />
                  </button>
                  <button className="rounded-full border-dashed border-2 p-[6px] z-19 mr-[-10px]">
                    {icons.user_add("gray", "20px")}
                  </button>
                </div>
                <button className="rounded-full border-dashed border p-[6px] border-[#FB0606]">
                  {icons.flag("#FB0606", "20px")}
                </button>
              </div>
              <div>
                <button className="flex items-center gap-x-1">
                  {icons.share("#BDBDBD", "20px")} اشتراک گذاری
                </button>
              </div>
            </div>
            <div className="pl-6 pr-8">
              <button className="rounded-full border-dashed border p-[6px] border-[#C1C1C1] my-7">
                {icons.tag("#C1C1C1", "20px")}
              </button>
              <div className="mb-2">
                <h5 className="text-2xl font-extrabold mb-2">عنوان تسک</h5>
                <p className=" font-medium text-base border border-gray-400 rounded-xl p-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد،{" "}
                </p>
              </div>
              <button className="my-6 flex items-center text-xs font-normal text-[#208D8E]">
                {icons.plus_square("green", "16px")} اضافه کردن پیوست
              </button>
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex flex-col justify-between">
            <div>
              <button className="absolute left-7 top-[-10px]">
                {icons.close("#BDBDBD", "24px")}
              </button>
              <div className="flex items-center border-b mt-9">
                <div className="border-l px-5">
                  <p className="text-xs font-normal text-[#BBBBBB] mb-2">
                    ساخته شده در
                  </p>
                  <p className="text-base font-medium mb-2"> 1 اردیبهشت 1402</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-normal text-[#BBBBBB] mb-2">
                    ددلاین
                  </p>
                  <p className="text-base font-medium mb-2">پس فردا</p>
                </div>
              </div>
              <div className="flex items-start gap-x-2 mr-3 mt-3 w-full">
                <div>
                  <ProfilePicture
                    firstName="mat"
                    lastName="ch"
                    imgHeight="36px"
                    imgWidth="36px"
                  />
                </div>
                <div className="border rounded-xl p-1 w-full ml-10 pl-12 py-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <p className="text-[#208D8E] text-base font-extrabold mr-2">
                        شما
                      </p>
                      <p className="text-xs font-normal text-gray-400 mr-3">
                        کامنت گذاشته اید
                      </p>
                    </div>
                    <p className="text-xs font-normal text-gray-400 mr-3">
                      12 تیر
                    </p>
                  </div>
                  <p className="text-xs font-normal pr-2 mb-3 mt-1">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-[49px]">
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInformation;
