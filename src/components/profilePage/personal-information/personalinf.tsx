import React, { useState } from "react";
import ProfilePicture from "../../common/profilePicture/profilePicture";

const PersonalInf: React.FC = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    profileImage: "", // URL of the profile image
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // به اینجا کدی برای ارسال اطلاعات به سرور اضافه کنید
    console.log("ثبت تغییرات:", profileData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[354px] py-3 pr-1 flex flex-col mx-6"
    >
      <h2 className="text-right mt-3 mb-10 font-bold" style={{ fontSize: 31 }}>
        اطلاعات فردی
      </h2>
      <div className="flex items-center gap-x-2 justify-start">
        <div className="h-[100px] w-[100px] rounded">
          <ProfilePicture
            lastName="A"
            firstName="B"
            imgHeight="100px"
            imgWidth="100px"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div>
            <label htmlFor="profileImage" className="custom-file-input text-xl">
              ویرایش عکس پروفایل
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
          <p className="text-xs text-gray-400">
            این تصویر برای عموم قابل نمایش است
          </p>
        </div>
      </div>
      <div className="my-2 mt-8 flex flex-col gap-1">
        <label htmlFor="firstName" className="text-base">
          نام
        </label>
        <input
          className=" rounded py-1 border border-gray-400"
          type="text"
          id="firstName"
          name="firstName"
          value={profileData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="my-2 flex flex-col gap-1">
        <label htmlFor="lastName">نام خانوادگی</label>
        <input
          className=" rounded py-1 border border-gray-400"
          type="text"
          id="lastName"
          name="lastName"
          value={profileData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="my-2 flex flex-col gap-1 mb-5">
        <label htmlFor="mobile">شماره موبایل:</label>
        <input
          className=" rounded py-1 border border-gray-400"
          type="text"
          id="mobile"
          name="mobile"
          value={profileData.mobile}
          onChange={handleChange}
        />
      </div>

      <button className="p-i-b mt-5" type="submit">
        ثبت تغییرات
      </button>
    </form>
  );
};

export default PersonalInf;
