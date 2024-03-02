import React from "react";
import ProfilePicture from "./../../../../../profilePicture/profilePicture";

interface Props {
  data: {
    name: string;
    color: string;
  };
}

const SummaryModal: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-extrabold mb-6">نام ورک اسپیس</p>
        <p className="text-sm font-extrabold mb-6">{data.name}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-extrabold mb-6">رنگ ورک اسپیس</p>
        <span
          className="w-5 h-5 rounded-sm mb-6"
          style={{ backgroundColor: `${data.color}` }}
        ></span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-extrabold">اعضا</p>
        <div className="w-9 h-9">
          <ProfilePicture
            firstName="نیلوفر"
            lastName="موجودی"
            imgHeight="36px"
            imgWidth="36px"
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
