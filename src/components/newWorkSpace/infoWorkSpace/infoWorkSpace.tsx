import React, { useState } from "react";
import icons from "../../../utils/icons/icons";
import ProfilePicture from "../../common/profilePicture/profilePicture";

interface Props {
  selectedName: string;
  selectedColor: string;
}

const SummaryModal: React.FC<Props> = ({ selectedName, selectedColor }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = () => {
    // ارسال اطلاعات به سرور یا مراحل بعدی
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-xl w-[501px] h-[294px] flex flex-col justify-between items-stretch">
        <div className="flex items-center justify-between gap-x-6 mb-5">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <h2 className="text-2xl font-bold">مرور اطلاعات</h2>
          <button onClick={handleClose}>{icons.back("black", "20px")}</button>
        </div>
        <div className="flex flex-col justify-center border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="text-sm font-extrabold mb-6">نام ورک اسپیس</p>
            <p className="text-sm font-extrabold mb-6">{selectedName}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-extrabold mb-6">رنگ ورک اسپیس</p>
            <span
              className="w-5 h-5 rounded-lg mb-6"
              style={{ backgroundColor: selectedColor }}
            ></span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-extrabold">اعضا</p>
            <div className="w-5 h-5">
              <ProfilePicture firstName="نیلوفر" lastName="موجودی" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-center mx-[22px]">
          <button onClick={handleSubmit} className="button-nws py-2 w-full">
            ساختن ورک اسپیس
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default SummaryModal;
