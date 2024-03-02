import React, { useState } from "react";
import icons from "./../../../../../../../utils/icons/icons";

interface Props {
  onSubmit: (color: string) => void;
  selectedName: string; // اضافه شده
  selectedColor: string; // اضافه شده
}

const ColorWorkSpace: React.FC<Props> = ({ onSubmit, selectedName }) => {
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
  const [backColor, setBackColor] = useState("#7D828C");
  const [isOpen, setIsOpen] = useState(true);
  const [textColor, setTextColor] = useState("white");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setBackColor(color);
    setTextColor("black");
  };
  const handleColorDisable = (color: string) => {
    setSelectedColor(color);
    setBackColor(color);
    setTextColor("white");
  };

  const handleSubmit = () => {
    onSubmit(selectedColor);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join(" ")
      .toUpperCase();
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-xl w-[501px] h-[294px] flex flex-col justify-between items-stretch">
        <div className="flex items-center justify-between gap-x-6 mb-5">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <h2 className="text-2xl font-bold">انتخاب رنگ ورک اسپیس</h2>
          <button onClick={handleClose}>{icons.back("black", "20px")}</button>
        </div>
        <div className="flex ">
          <div className="">
            {selectedName && (
              <span
                className="text-2xl font-bold w-[70px] h-[70px] text-center rounded-md flex items-center justify-center"
                style={{ backgroundColor: backColor, color: textColor }}
              >
                {renderInitials(selectedName)}
              </span>
            )}
          </div>
          <div className="w-[300px] mr-4">
            <p className="text-sm font-normal mb-3">رنگ ورک اسپیس</p>
            <div className="flex flex-wrap items-center justify-start">
              <button
                onClick={() => handleColorDisable("#7D828C")}
                className="ml-2 mt-2"
              >
                {icons.disable("gray", "20px")}
              </button>

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
        </div>
        <div className="mt-4 text-center mx-[22px]">
          <button onClick={handleSubmit} className="button-nws py-2 w-full">
            ادامه
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ColorWorkSpace;
