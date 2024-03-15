import React, { useState } from "react";
import icons from "../../utils/icons/icons";
import config from "../../config.json";
import { useDarkMode } from "../common/darkmode/DarkModeContext";

const Card: React.FC = (item) => {
  const [taskData] = useState<any>(item);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`w-[249px] bg-white rounded-lg p-4 shadow-md mb-4 ${
        darkMode ? "bg-stone-500 text-white" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <>
        {taskData?.thumbnail && (
          <img
            src={config.apiUrl + taskData?.thumbnail}
            alt="Task Photo"
            className="w-[257px] h-[134px] rounded-md"
          />
        )}
        <div
          className={`flex flex-col text-right py-2 space-y-2 ${
            darkMode ? "bg-stone-500 text-white" : "bg-white"
          }`}
        >
          <p>{taskData?.name}</p>
          <p>{taskData?.description}</p>
          <div className="flex items-center justify-end">
            {icons.check_round_square("#C9CBDA", "16px")}
            <p>{taskData?.deadline}</p>
            {icons.flag("red", "16px")}
          </div>
          <div className="flex items-center justify-end">
            <p className="bg-purple-200 text-purple-700 rounded-lg py-1 px-2 mx-2">
              پروژه
            </p>
            <p className="bg-blue-200 text-blue-700 rounded-lg p-1 px-2">درس</p>
          </div>
          {isHovered && (
            <div>
              <p className="border-b border-gray-200 mb-5 block"></p>
              <div className="flex justify-between mb-5">
                {icons.dots("#323232", "20px")}
                {icons.check_circle("#323232", "20px")}
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Card;
