import React from "react";
import icons from "../../../../utils/icons/icons";
const Profilesidebar: React.FC = () => {
  return (
    <div dir="rtl" className="flex flex-col items-start" style={{ width: 266 }}>
      <button className="si-back my-6 mb-10 font-medium flex justify-center items-center gap-1">
        {icons.arrow_right("white", "20px")}
        بازگشت
      </button>
      <div className="pr-2 flex flex-col items-start gap-3">
        <button className="si-p-li py-1 px-2 mb-3 flex justify-start items-center gap-1">
          {icons.profile_edit("black", "20px")}
          اطلاعات فردی
        </button>
        <button className="si-p-li py-1 px-2 mb-3 flex justify-start items-center gap-1">
          {icons.profile_check("black", "20px")}
          اطلاعات حساب
        </button>
        <button className="si-p-li py-1 px-2 mb-3 flex justify-start items-center gap-1">
          {icons.setting("black", "20px")}
          تنظیمات
        </button>
      </div>
    </div>
  );
};
export default Profilesidebar;
