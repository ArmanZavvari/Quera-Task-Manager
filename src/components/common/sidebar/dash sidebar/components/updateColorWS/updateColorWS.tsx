import React, { useState } from "react";
import icons from "../../../../../../utils/icons/icons";
import { putWorkSpace } from "../../../../../../services/workSpaceService";

interface UpdateNameWSProps {
  modalUpdateColorWS?: boolean;
  handleClose(): void;
  id: string;
  name: string;
}
const UpdateNameWS: React.FC<UpdateNameWSProps> = ({
  modalUpdateColorWS,
  handleClose,
  id,
  name,
}) => {
  const colors = [
    "#4C6EF5",
    "#228BE6",
    "#15AABF",
    "#12B886",
    "#208D8E",
    "#40C057",
    "#82C91E",
    "#FAB005",
    "#FD7E14",
    "#FA5252",
    "#E64980",
    "#BE4BDB",
    "#7950F2",
  ];

  const [selectedColor, setSelectedColor] = useState("");
  const [color, setColor] = useState({ color: "" });

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setColor({ color: color });
  };
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  const handleSubmit = async () => {
    const userData = { color: color.color, name: name };
    try {
      const result = await putWorkSpace(userData, id);
      console.log(result);
    } catch (e) {
      console.log("Error Occured!");
      console.log(e);
    }
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-[2px] z-10"
      onClick={handleOverlayClick}
    >
      <div className="bg-white py-5 px-10 rounded-xl w-[501px]  flex flex-col justify-between items-center">
        <div className="flex items-center gap-x-20 mb-5 self-start">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <div className="text-2xl font-bold">ویرایش نام ورک‌اسپیس</div>
        </div>
        <div>
          <p className="text-sm font-normal mb-3">رنگ ورک اسپیس</p>
          <div className="flex flex-wrap items-center justify-start mb-8">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorSelect(color)}
                className={`w-5 h-5 rounded-lg cursor-pointer ml-2 mt-2  ${
                  selectedColor === color ? `` : `border-white border-2`
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
        <button className="button-nws py-[6px] w-full" onClick={handleSubmit}>
          ویرایش رنگ ورک‌اسپیس
        </button>
      </div>
    </div>
  );
};

export default UpdateNameWS;
