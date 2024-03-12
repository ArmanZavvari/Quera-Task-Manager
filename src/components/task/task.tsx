import React, { useState, useEffect } from "react";
import icons from "../../utils/icons/icons";
import { TaskData } from "../../types/types";
import { taskGet } from "../../services/taskService";

const Card: React.FC = () => {
  const [taskData, setTaskData] = useState<TaskData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const workspaceId = 286;
    const projectId = 41;
    const boardId = 6;
    taskGet(workspaceId, projectId, boardId)
      .then((response) => {
        setTaskData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      className="w-[249px] bg-white rounded-lg p-4 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        taskData.map((item) => {
          console.log(item);
          return (
            <>
              <img
                src={item.thumbnail}
                alt="Task Photo"
                className="w-[257px] h-[134px] rounded-md"
              />
              <div className="flex flex-col text-right py-2 space-y-2">
                <p>{item.name}</p>
                <p>{item.description}</p>
                <div className="flex items-center justify-end">
                  {icons.check_round_square("#C9CBDA", "16px")}
                  <p>{item.deadline}</p>
                  {icons.flag("red", "16px")}
                </div>
                <div className="flex items-center justify-end">
                  <p className="bg-purple-200 text-purple-700 rounded-lg py-1 px-2 mx-2">
                    پروژه
                  </p>
                  <p className="bg-blue-200 text-blue-700 rounded-lg p-1 px-2">
                    درس
                  </p>
                </div>
                {isHovered && (
                  <div>
                    <p className="border-b border-gray-200 mb-5 block"></p>
                    <div className="flex justify-between mb-5">
                      {icons.dots("#323232", "20px")}
                      {icons.check_circle("#323232", "20px")}
                    </div>
                  </div>
                )}
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default Card;
