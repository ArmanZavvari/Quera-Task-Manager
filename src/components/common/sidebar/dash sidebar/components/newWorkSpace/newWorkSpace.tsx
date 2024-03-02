import React, { useEffect, useState } from "react";
import icons from "../../../../../../utils/icons/icons";
import NameWorkSpace from "./nameWorkSpace/nameWorkSpace";
import ColorWorkSpace from "./colorWorkSpace/colorWorkSpace";
import SummaryModal from "./infoWorkSpace/infoWorkSpace";

interface NewWorkSpaceProps {
  modalOpen?: boolean;
  handleClose(): void;
}

const NewWorkSpace: React.FC<NewWorkSpaceProps> = ({
  modalOpen,
  handleClose,
}) => {
  const [data, setData] = useState({ name: "", color: "" });
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

  const previ = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("done");
    handleClose();
  };
  useEffect(() => {}, [data]);
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return modalOpen ? (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-[2px] z-10"
      onClick={handleOverlayClick}
    >
      <div className="bg-white py-5 px-10 rounded-xl w-[501px]  flex flex-col justify-between items-stretch">
        <div className="flex items-center justify-between gap-x-6 mb-5">
          <button onClick={handleClose}>{icons.close("black", "20px")}</button>
          <div>
            {step === 0 && (
              <div className="text-2xl font-bold">ساختن ورک اسپیس جدید</div>
            )}
            {step === 1 && (
              <div className="text-2xl font-bold">انتخاب رنگ ورک اسپیس</div>
            )}
            {step === 2 && (
              <div className="text-2xl font-bold">مرور اطلاعات</div>
            )}
          </div>

          <button onClick={previ} disabled={step === 0}>
            {step !== 0 && icons.back("black", "20px")}
          </button>
        </div>
        <div>
          {step === 0 ? (
            <NameWorkSpace data={data} setData={setData} />
          ) : step === 1 ? (
            <ColorWorkSpace data={data} setData={setData} />
          ) : (
            <SummaryModal data={data} />
          )}
        </div>
        <div className="mt-6">
          {(step === 0 || step === 1) && (
            <button className="button-nws py-[6px] w-full" onClick={next}>
              ادامه
            </button>
          )}
          {step === 2 && (
            <button
              className="button-nws py-[6px] w-full"
              onClick={handleSubmit}
            >
              ساختن ورک اسپیس
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 gap-x-3">
        <span
          className={`w-3 h-3 rounded-full ${
            step === 2 ? "bg-[#FFFFFF]" : "bg-[#8A8989]"
          }`}
        ></span>
        <span
          className={`w-3 h-3 rounded-full ${
            step === 1 ? "bg-[#FFFFFF]" : "bg-[#8A8989]"
          }`}
        ></span>
        <span
          className={`w-3 h-3 rounded-full ${
            step === 0 ? "bg-[#FFFFFF]" : "bg-[#8A8989]"
          }`}
        ></span>
      </div>
    </div>
  ) : null;
};

export default NewWorkSpace;
