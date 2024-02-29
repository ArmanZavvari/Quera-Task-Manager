import React from "react";
import icons from "../../../src/utils/icons/icons";

const ListComponent = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("Fa-Ir", { day: "numeric", month: "long" });
  console.log(formattedDate);

  return (
    <div dir="rtl" className="flex items-center justify-between w-[986px] mt-10">
      <div className="flex items-center">
        <span className="w-4 h-4 rounded bg-pink-500"></span>
        <p className="text-base leading-6 text-right">این یک تیتر برای این تسک است</p>
      </div>
      <p>{formattedDate}</p>
      <span>{icons.flag("red", "20px")}</span>
      <span>{icons.paragraph("#BDC0C6", "20px")}</span>
    </div>
  );
};

export default ListComponent;
