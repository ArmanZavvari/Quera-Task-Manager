import React, { useState } from "react";
import icons from "../../../../../../utils/icons/icons";
import { patchProjects } from "../../../../../../services/projectService";

interface UpdateNameProjectProps {
  modalUpdateWS?: boolean;
  handleClose(): void;
  id: string;
  idP: string;
  namee: string;
  handleChange: () => void;
}
const UpdateNameProject: React.FC<UpdateNameProjectProps> = ({
  modalUpdateWS,
  handleClose,
  id,
  idP,
  namee,
  handleChange,
}) => {
  const [name, setName] = useState({ name: "" });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, name: e.target.value });
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  const handleSubmit = async () => {
    const userData = {
      name: name.name,
    };

    try {
      const result = await patchProjects(userData, id, idP);
      handleChange();
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
      <div className="bg-white py-5 px-10 rounded-xl w-[501px]  flex flex-col justify-between items-stretch">
        <div className="flex items-center gap-x-[115px] mb-5">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <div className="text-2xl font-bold">ویرایش نام پروژه</div>
        </div>
        <div>
          <h5 className="mb-1">نام پروژه</h5>
          <input
            defaultValue={namee}
            type="text"
            onChange={handleInput}
            className="border border-gray-400 rounded-md px-3 py-2 mb-8 w-full"
          />
        </div>
        <button className="button-nws py-[6px] w-full" onClick={handleSubmit}>
          ویرایش نام پروژه
        </button>
      </div>
    </div>
  );
};

export default UpdateNameProject;
