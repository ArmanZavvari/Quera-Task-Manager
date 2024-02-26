import React from "react";
import icons from "../../../utils/icons/icons";

interface MonthControlsProps {
  currentYear: number;
  currentMonth: number;
  changeMonth: (increment: number) => void;
  goToToday: () => void;
}

const MonthControls: React.FC<MonthControlsProps> = ({
  currentYear,
  currentMonth,
  changeMonth,
  goToToday,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => goToToday()}>امروز</button>
      <button onClick={() => changeMonth(1)}>
        {icons.chevron_right("black", "20px")}
      </button>
      <button onClick={() => changeMonth(-1)}>
        {icons.chevron_left("black", "20px")}
      </button>
      <h2>{`${currentYear}/${currentMonth}`}</h2>
    </div>
  );
};

export default MonthControls;
