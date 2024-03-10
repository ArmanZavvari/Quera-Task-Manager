import icons from '../../utils/icons/icons'
import { useState } from 'react';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`w-[249px] bg-white rounded-lg p-4 shadow-md ${isHovered ? 'h-[350px]' : 'h-[298px]'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://th.bing.com/th/id/OIP.sK7BLe72SeZml94SEYJKFwHaEK?rs=1&pid=ImgDetMain"
        alt="Task Photo"
        className="w-[257px] h-[134px] rounded-md"
      />
      <div className='flex flex-col text-right py-2 space-y-2 '>

        <p>اسم لیست</p>

        <p>.این یک تیتر برای این تسک است</p>
        <div className='flex items-center justify-end '>
            {icons.check_round_square("#C9CBDA","16px")}
            <p>مهر5-فردا</p>
            {icons.flag("red","16px")}
        </div>
        <div className='flex items-center justify-end  '>
            <p className='bg-purple-200 text-purple-700 rounded-lg py-1 px-2 mx-2'>پروژه</p>
            <p className="bg-blue-200 text-blue-700 rounded-lg p-1 px-2">درس</p>
        </div>
        {isHovered && (
  <div>
    <p className="border-b border-gray-200 mb-5 block"></p>
    <div className='flex justify-between mb-5'>       
    {icons.dots("#323232","20px")}
      {icons.check_circle("#323232","20px")}
      
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Card;



