import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import icons from "../../../utils/icons/icons";
import Filter from "../../filter/filter";
import { useDarkMode } from "../../common/darkmode/DarkModeContext";

const BodyHeader = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { wid, pid } = useParams();
  const tasks = [
    {
      id: 1,
      date: "2024-02-27",
      tag: "Work",
      member: "John",
      priority: "",
    },
    {
      id: 2,
      date: "2024-02-28",
      tag: "Study",
      member: "Alice",
      priority: "Medium",
    },
    {
      id: 3,
      date: "", // No date
      tag: "Project",
      member: "Bob",
      priority: "",
    },
    {
      id: 4,
      date: "2024-03-01",
      tag: "Work",
      member: "",
      priority: "High",
    },
    {
      id: 5,
      date: "", // No date
      tag: "Study",
      member: "John",
      priority: "Medium",
    },
    {
      id: 6,
      date: "2024-03-02",
      tag: "Project",
      member: "Bob",
      priority: "",
    },
  ];

  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  return (
    <div className={`py-4 ${darkMode ? "bg-stone-500" : ""}`}>
      <div
        className={`flex justify-between border-b-[0.5px] ${
          darkMode ? "border-gray-900" : "border-gray-300"
        } gap-4 py-4 items-center`}
      >
        <div className="flex flex-col flex-1">
          <div className="flex gap-4  ">
            <h2
              className={`border-l-[1px] border-gray-600 pl-4  text-right font-extrabold text-xl ${
                darkMode ? "text-white  " : "text-black"
              }`}
            >
              پروژه اول
            </h2>
            <button
              onClick={() => {
                if (wid !== undefined && pid !== undefined) {
                  navigate(`/dashboard/listview/${wid}/projects/${pid}/`);
                } else {
                  console.error("Workspace ID or Project ID is undefined");
                }
              }}
              className={`flex border-l-[1px]  gap-[5px] border-gray-600 pl-4 text-right ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              {icons.list("#323232", "24px")}
              نمایش لیستی
            </button>
            <button
              onClick={() => {
                if (wid !== undefined && pid !== undefined) {
                  navigate(`/dashboard/boardview/${wid}/projects/${pid}/`);
                } else {
                  console.error("Workspace ID or Project ID is undefined");
                }
              }}
              className={`flex border-l-[1px]  gap-[5px] border-gray-600 pl-4 text-right ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              {icons.list("#323232", "24px")}
              نمایش ستونی
            </button>
            <button
              onClick={() => navigate("/dashboard/calendar")}
              className={`flex border-l-[1px] gap-[5px] border-gray-600 pl-4 text-right ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              {icons.calender_full("#323232", "24px")}
              تقویم
            </button>
          </div>
        </div>
        <button
          className={`flex gap-[5px] ${
            darkMode ? "text-white " : "text-black"
          }`}
        >
          {icons.share("#323232", "24px")}
          اشتراک‌گذاری
        </button>
      </div>
      <div
        className={`border-b-[0.5px] ${
          darkMode ? "border-gray-900" : "border-gray-300"
        } py-4`}
      >
        <div className="flex justify-between    h-[28px] ">
          <div className="flex gap-[40px]">
            <div className="flex relative pl-4 gap-1  border-l border-gray-600">
              <input
                type="text"
                placeholder="جستجو بین تسک‌ها"
                className={`w-[200px] pl-4 pr-10 py-2 ${
                  darkMode ? "bg-stone-500 text-white" : "bg-white text-black"
                }`}
              />

              <div className="absolute inset-y-0 right-0 flex items-center  ">
                {icons.search("#323232", "24px")}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFilterOpen(true)}
                className={`flex gap-4 ${
                  darkMode ? "bg-stone-500 text-white" : "bg-white text-black"
                }`}
              >
                {icons.filter("#323232", "24px")}
                فیلترها
              </button>
              <button
                className={`px-3 py-1 rounded-md ${
                  darkMode
                    ? "bg-gray-400 text-black"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                دسته‌بندی‌شده با: وضعیت
              </button>
            </div>
          </div>
          <button
            className={`flex items-center border border-solid border-blue-500 w-auto h-auto px-8 py-4 rounded-lg gap-6  ${
              darkMode
                ? "bg-stone-500 text-white border-black"
                : "bg-white text-black"
            }`}
          >
            {icons.refresh("#323232", "24px")}
            بازگردانی تسک های آرشیو شده
          </button>
        </div>
      </div>
      {filterOpen && (
        <Filter handleFilterClose={handleFilterClose} tasks={tasks} />
      )}
    </div>
  );
};

export default BodyHeader;
