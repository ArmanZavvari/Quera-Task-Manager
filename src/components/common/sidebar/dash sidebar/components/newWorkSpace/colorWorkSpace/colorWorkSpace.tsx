import React, { useState } from "react";
import icons from "./../../../../../../../utils/icons/icons";

interface Props {
  data: {
    name: string;
    color: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      color: string;
    }>
  >;
}

const ColorWorkSpace: React.FC<Props> = ({ data, setData }) => {
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
  const [textColor, setTextColor] = useState("white");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setBackColor(color);
    setTextColor("black");
    setData({ ...data, color: color });
  };
  const handleColorDisable = (color: string) => {
    setSelectedColor(color);
    setBackColor(color);
    setTextColor("white");
    setData({ ...data, color: color });
  };

  const renderInitials = (name: string) => {
    const words = name.split(" ");
    const firstLetter = words[0][0];
    const secondLetter = words[1] ? words[1][0] : "";

    return `${firstLetter} ${secondLetter}`;
  };

  return (
    <div className="flex ">
      <div className="">
        {`${data.name}` && (
          <span
            className="text-2xl font-bold w-[70px] h-[70px] text-center rounded-md flex items-center justify-center"
            style={{ backgroundColor: backColor, color: textColor }}
          >
            {renderInitials(`${data.name}`)}
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
  );
};

export default ColorWorkSpace;
