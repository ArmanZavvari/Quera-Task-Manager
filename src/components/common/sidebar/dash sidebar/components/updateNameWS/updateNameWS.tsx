import React, { useState } from "react";
import icons from "../../../../../../utils/icons/icons";
import { putWorkSpace } from "../../../../../../services/workSpaceService";

interface UpdateNameWSProps {
  modalUpdateWS?: boolean;
  handleClose(): void;
  id: string;
  namee: string;
  handleChange: () => void;
}
const UpdateNameWS: React.FC<UpdateNameWSProps> = ({
  modalUpdateWS,
  handleClose,
  id,
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
      const result = await putWorkSpace(userData, id);
      handleChange();
      console.log(result);
    } catch (e) {
      console.log("Error Occured!");
      console.log(e);
    }
    console.log(userData);
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-[2px] z-10"
      onClick={handleOverlayClick}
    >
      <div className="bg-white py-5 px-10 rounded-xl w-[501px]  flex flex-col justify-between items-stretch">
        <div className="flex items-center gap-x-20 mb-5">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <div className="text-2xl font-bold">ویرایش نام ورک‌اسپیس</div>
        </div>
        <div>
          <h5 className="mb-1">نام ورک اسپیس</h5>
          <input
            defaultValue={namee}
            type="text"
            onChange={handleInput}
            className="border border-gray-400 rounded-md px-3 py-2 mb-8 w-full"
          />
        </div>
        <button className="button-nws py-[6px] w-full" onClick={handleSubmit}>
          ویرایش نام ورک‌اسپیس
        </button>
      </div>
    </div>
  );
};

export default UpdateNameWS;
