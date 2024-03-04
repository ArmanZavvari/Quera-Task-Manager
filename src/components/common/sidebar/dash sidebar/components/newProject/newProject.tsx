import React, { useState } from "react";
import icons from "../../../../../../utils/icons/icons";

interface NewProjectProps {
  modalOpenPro?: boolean;
  handleClose(): void;
}
const NewProject: React.FC<NewProjectProps> = ({
  modalOpenPro,
  handleClose,
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
  const handleSubmit = () => {
    console.log(name.name);
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-[2px] z-10"
      onClick={handleOverlayClick}
    >
      <div className="bg-white py-5 px-10 rounded-xl w-[501px]  flex flex-col justify-between items-stretch">
        <div className="flex items-center gap-x-[105px] mb-5">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <div className="text-2xl font-bold">ساختن پروژه جدید</div>
        </div>
        <div>
          <h5 className="mb-1">نام پروژه </h5>
          <input
            type="text"
            onChange={handleInput}
            className="border border-gray-400 rounded-md px-3 py-2 mb-8 w-full"
          />
        </div>
        <button className="button-nws py-[6px] w-full" onClick={handleSubmit}>
          ساختن پروژه
        </button>
      </div>
    </div>
  );
};

export default NewProject;
