import React, { useEffect, useState } from "react";
import icons from "../../../../../../utils/icons/icons";
import { deleteWorkSpace } from "../../../../../../services/workSpaceService";
import ShareWorkSpaceModal from "../../../../../sharedWorkSpaces/sharedWorkSpaces";
interface WorkSpaceDropDownProps {
  openNewWorkSpaceModal: () => void;
  id: string;
}

const WorkSpaceDropDown: React.FC<WorkSpaceDropDownProps> = ({
  openNewWorkSpaceModal,
  id,
}) => {
  const [sharedOpen, setSharedOpen] = useState(false);
  const handleOpenSharedWork = () => {
    setSharedOpen(true);
  };
  const handleCLoseShared = () => {
    setSharedOpen(false);
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
      <div className="dropdown-content absolute top-10 left-0 bg-white shadow-md p-2 z-30">
        <ul>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button className="flex justify-start items-center gap-1">
              {icons.plus("black", "20px")}ساختن پروژه جدید
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center gap-1"
              onClick={openNewWorkSpaceModal}
            >
              {icons.edit("black", "20px")}ویرایش نام ورک اسپیس
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button className="flex justify-start items-center gap-1">
              {icons.color("black", "20px")}ویرایش رنگ
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button className="flex justify-start items-center gap-1">
              {icons.link("black", "20px")}کپی لینک
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center text-red-600 gap-1"
              onClick={handleDelete}
            >
              {icons.trash("red", "20px")}حذف
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center gap-1"
              onClick={handleOpenSharedWork}
            >
              {icons.share("black", "20px")}اشتراک گذاری
            </button>
          </li>
        </ul>
      </div>
      {sharedOpen && (
        <ShareWorkSpaceModal
          sharedOpen={sharedOpen}
          handleCloseShared={handleCLoseShared}
        />
      )}
    </>
  );
};

export default WorkSpaceDropDown;
