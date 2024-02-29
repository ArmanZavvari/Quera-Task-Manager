import React, { useState } from "react";
import icons from "../../../utils/icons/icons";

interface Props {
  onSubmit: (name: string) => void;
}

const NameWorkSpace: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(name);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-7 rounded-md w-[500px] h-[268px] flex flex-col justify-between">
        <div className="flex items-center gap-x-[90px]">
          <button onClick={handleClose}>{icons.close("black", "24px")}</button>
          <h2 className="text-2xl font-extrabold text-center">
            ساختن ورک اسپیس جدید
          </h2>
        </div>
        <div className="px-4">
          <h5 className="mb-1">نام ورک اسپیس</h5>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-400 rounded-md px-3 py-2 mb-4 w-full"
          />
        </div>
        <div className="px-4">
          <button onClick={handleSubmit} className="button-nws py-2 w-full">
            ادامه
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NameWorkSpace;
