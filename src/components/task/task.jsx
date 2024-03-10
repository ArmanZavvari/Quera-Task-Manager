import { useState, useEffect } from 'react';
import axios from 'axios';
import icons from '../../utils/icons/icons';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [taskData, setTaskData] = useState(null); 

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        
        const response = await axios.get('');
        setTaskData(response.data);
      } catch (error) {
        console.error('Failed to fetch task data:', error);
      }
    };

    fetchTaskData();
  }, []); 

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!taskData) return <div>Loading...</div>;

  return (
    <div 
      className={`w-[249px] bg-white rounded-lg p-4 shadow-md ${isHovered ? 'h-[350px]' : 'h-[298px]'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* task has an image URL, a title, and a description inshaAllah ! */}
      <img
        src={taskData.imageUrl || "fallback-image-url"} // Use a fallback image URL if needed
        alt="Task Photo"
        className="w-[257px] h-[134px] rounded-md"
      />
      <div className='flex flex-col text-right py-2 space-y-2 '>
        <p>{taskData.name}</p>
        <p>{taskData.description}</p>
        <div className='flex items-center justify-end '>
            {icons.check_round_square("#C9CBDA","16px")}
            <p>{taskData.date}</p> {/* Example: "Oct 5 - Tomorrow" */}
            {icons.flag("red","16px")}
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
