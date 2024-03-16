import React, { useState } from "react";
import icons from "../../utils/icons/icons";
import ProfilePicture from "../common/profilePicture/profilePicture";

interface ListItemProps {
  item: any;
}

const List: React.FC<ListItemProps> = ({ item }) => {
  const [taskData] = useState<any>(item);

  return (
    <div>
      <div className="flex items-center justify-between rounded-md  h-[47px] mt-5">
        <div className="flex items-center w-[493px] text-base leading-6 text-right">
          <span className="w-4 h-4 rounded bg-pink-500 ml-2"></span>
          <p>{taskData?.name}</p>
        </div>
        <div className="flex items-center justify-between w-[493px]">
          <div className="flex w-[70px] relative">
            <div className="flex rounded-full border border-gray-300 absolute left-8">
              <ProfilePicture imgHeight="33px" imgWidth="32px" />
            </div>
            <div className=" flex rounded-full border border-gray-300 absolute right-0">
              <ProfilePicture imgHeight="33px" imgWidth="32px" />
            </div>
          </div>
          <p>{taskData?.deadline}</p>
          <span>{icons.flag("red", "20px")}</span>
          <span className="ml-5">{icons.paragraph("#BDC0C6", "20px")}</span>
        </div>
      </div>
    </div>
  );
};

export default List;
