import React from "react";
import icons from "../../../../../../utils/icons/icons";
import { deleteProjects } from "../../../../../../services/projectService";
interface ProjectDropDownProps {
  openTask: () => void;
  openSharedProject: () => void;
  id: string;
  idP: string;
  openProjectName: () => void;
  handleChange: () => void;
}

const ProjectDropDown: React.FC<ProjectDropDownProps> = ({
  openSharedProject,
  openTask,
  id,
  idP,
  openProjectName,
  handleChange,
}) => {
  const handleDelete = async () => {
    try {
      const result = await deleteProjects(idP, id);
      handleChange();
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
              onClick={openTask}
            >
              {icons.plus("black", "20px")}ساختن تسک جدید
            </button>
          </li>
          <li className="py-1 hover:bg-gray-100 cursor-pointer">
            <button
              className="flex justify-start items-center gap-2 text-sm font-normal p-1"
              onClick={openProjectName}
            >
              {icons.edit("black", "20px")}ویرایش نام پروژه
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
              onClick={openSharedProject}
            >
              {icons.share("white", "20px")}اشتراک گذاری
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectDropDown;
