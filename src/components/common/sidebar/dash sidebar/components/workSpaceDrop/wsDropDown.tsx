import React, { useState } from "react";
import icons from "../../../../../../utils/icons/icons";
import { deleteWorkSpace } from "../../../../../../services/workSpaceService";
import ShareWorkSpaceModal from "../../../../../sharedWorkSpaces/sharedWorkSpaces";
interface WorkSpaceDropDownProps {
  openUpdateNameWS: () => void;
  id: string;
  openShared: () => void;
  openUpdateNameColorWS: () => void;
  openProject: () => void;
}

const WorkSpaceDropDown: React.FC<WorkSpaceDropDownProps> = ({
  openUpdateNameWS,
  id,
  openShared,
  openUpdateNameColorWS,
  openProject,
}) => {
  const handleOpenSharedWork = () => {
    openShared();
  };
  const handleOpenProject = () => {
    openProject();
  };

  const handleDelete = async () => {
    try {
      const result = await deleteWorkSpace(id);
      console.log(result);
    } catch (e) {
      console.log("Error Occured!");
      console.log(e);
    }
  };
  return (
    <>
      <div className="dropdown-content absolute top-10 left-0 bg-white shadow-md p-2 z-30 rounded-lg">
        <ul>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center gap-2 text-sm font-normal p-1"
              onClick={handleOpenProject}
            >
              {icons.plus("black", "20px")}ساختن پروژه جدید
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center gap-2 text-sm font-normal p-1"
              onClick={openUpdateNameWS}
            >
              {icons.edit("black", "20px")}ویرایش نام ورک اسپیس
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center gap-2 text-sm font-normal p-1"
              onClick={openUpdateNameColorWS}
            >
              {icons.color("black", "20px")}ویرایش رنگ
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button className="flex justify-start items-center gap-2 text-sm font-normal p-1">
              {icons.link("black", "20px")}کپی لینک
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center text-red-600 gap-2 text-sm font-normal p-1"
              onClick={handleDelete}
            >
              {icons.trash("red", "20px")}حذف
            </button>
          </li>
          <li className="py-1 cursor-pointer">
            <button
              className="flex justify-start items-center gap-2 text-xs font-normal p-1 py-2 bg-[#208d8e] text-white w-full rounded-lg border border-white hover:bg-white hover:text-[#208d8e] hover:border hover:border-[#208d8e]"
              onClick={handleOpenSharedWork}
            >
              {icons.share("white", "20px")}اشتراک گذاری
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WorkSpaceDropDown;
