import React from "react";
import icons from "../../utils/icons/icons";

const BoardView = () => {
  return (
    <div className="flex gap-5">
      <div>
        <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FD7E14] border-[#D2D6DC] my-4 px-2">
          <p>Open</p>
          <div className="flex items-center">
            {icons.dots("#323232", "24px")}
            {icons.plus("#323232", "24px")}
          </div>
        </div>
        <div>content</div>
      </div>
      <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#4C6EF5] border-[#D2D6DC] my-4 px-2">
        <p>In Progress</p>
      </div>
      <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FAB005] border-[#D2D6DC] my-4 px-2">
        <p>Pending</p>
      </div>
      <div className="flex items-center justify-between w-[250px] h-[40px] font-bold  border border-t-[3px] rounded-2xl border-t-[#FD7E14] border-[#D2D6DC] my-4 px-2">
        <p>To Do</p>
      </div>
    </div>
  );
};

export default BoardView;
