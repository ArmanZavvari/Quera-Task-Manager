import React, { useState } from 'react';
import icons from '../../utils/icons/icons';

const PriorityCard: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("red");
  const [selectedBorderColor, setSelectedBorderColor] = useState<string>("border-red-500");
  
  return (
    <div className='w-[166px]'>
      <div className="w-[166px] h-[188px] rounded-md bg-white shadow-md space-x-1 pr-2 pt-2 flex flex-col justify-between mb-4">
        <button 
          className="flex items-center justify-end gap-1"
          onClick={() => {
            setSelectedColor("red");
            setSelectedBorderColor("border-red-500");
          }}
        >
          <p>فوری</p>
          {icons.flag("red", "16px")}
        </button>
        <button 
          className="flex items-center justify-end gap-1"
          onClick={() => {
            setSelectedColor("#FAB005");
            setSelectedBorderColor("border-orange-300");
          }}
        >
          <p>بالا</p>
          {icons.flag("#FAB005", "16px")}
        </button>
        <button 
          className="flex items-center justify-end gap-1"
          onClick={() => {
            setSelectedColor("#15AABF");
            setSelectedBorderColor("border-sky-400");
          }}
        >
          <p>متوسط</p>
          {icons.flag("#15AABF", "16px")}
        </button>
        <button 
          className="flex items-center justify-end gap-1"
          onClick={() => {
            setSelectedColor("#82C91E");
            setSelectedBorderColor("border-lime-400");
          }}
        >
          <p>پایین</p>
          {icons.flag("#82C91E", "16px")}
        </button>
        <div className="flex items-center justify-end gap-1 mb-4">
          <p className="text-gray-500">حذف اولویت</p>
          {icons.close("#E45454", "16px")}
        </div>
      </div>
      <div className='flex justify-end'>
        <div className={`mx-1 border border-dashed ${selectedBorderColor} p-1 rounded-full`}>
          {icons.flag(selectedColor, "40px")}
        </div>
        <div className={`mx-1 border border-dashed ${selectedBorderColor} p-1 rounded-full`}>
          {icons.flag(selectedColor, "40px")}
        </div>
      </div>
    </div>
  );
};

export default PriorityCard;
