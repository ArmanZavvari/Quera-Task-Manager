import icons from '../../utils/icons/icons'
import React from "react";

const PriorityCard = () => {
  return (
    <div className="w-[166px] h-[188px] rounded-md bg-white shadow-md space-x-1 pr-2 pt-2 flex flex-col justify-between">
      <div className="flex items-center justify-end gap-1">
        <p>فوری</p>
        {icons.flag("red", "16px")}
      </div>
      <div className="flex items-center justify-end gap-1">
        <p>بالا</p>
        {icons.flag("#FAB005", "16px")}
      </div>
      <div className="flex items-center justify-end gap-1">
        <p>متوسط</p>
        {icons.flag("#15AABF", "16px")}
      </div>
      <div className="flex items-center justify-end gap-1">
        <p>پایین</p>
        {icons.flag("#82C91E", "16px")}
      </div>
      <div className="flex items-center justify-end gap-1 mb-4">
        <p className="text-gray-500">حذف اولویت</p>
        {icons.close("#E45454", "16px")}
      </div>
    </div>
  );
};

export default PriorityCard;

