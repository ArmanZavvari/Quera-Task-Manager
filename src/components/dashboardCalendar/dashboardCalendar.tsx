import React, { useState } from "react";
import moment from "jalali-moment";
import MonthControls from "./month-control/monthcontrol";
import icons from "../../utils/icons/icons";

const Calendar: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(moment().jYear());
  const [currentMonth, setCurrentMonth] = useState<number>(
    moment().jMonth() + 1
  );
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const changeMonth = (increment: number) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;
    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const daysInMonth = (year: number, month: number) => {
    return moment.jDaysInMonth(year, month);
  };

  const generateCalendar = () => {
    const totalDays = daysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = moment(
      `${currentYear}/${currentMonth}/1`,
      "jYYYY/jM/jD"
    ).day();
    const weeks: Array<Array<number | string>> = [[]];
    let currentDay = 1;

    for (let i = 0; i < firstDayOfMonth; i++) {
      weeks[0].push("");
    }

    for (let day = firstDayOfMonth; day < 7; day++) {
      weeks[0].push(currentDay++);
    }

    while (currentDay <= totalDays) {
      const newRow: Array<number | string> = [];
      for (let day = 0; day < 7 && currentDay <= totalDays; day++) {
        newRow.push(currentDay++);
      }
      weeks.push(newRow);
    }

    return weeks;
  };

  const goToToday = () => {
    setCurrentYear(moment().jYear());
    setCurrentMonth(moment().jMonth() + 1);
  };

  const weeks = generateCalendar();
  const today = moment().jDate();

  const handleDayHover = (day: number) => {
    setHoveredDay(day);
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  const handleDayClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const weekdays = [
    "شنبه",
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];

  return (
    <div className="p-4 box-content w-[1033px] h-[779px]">
      <div className="invisible">
        <MonthControls
          currentYear={currentYear}
          currentMonth={currentMonth}
          changeMonth={changeMonth}
          goToToday={goToToday}
        />
      </div>
      <div className="grid grid-cols-7 ">
        {weekdays.map((weekday, index) => (
          <div
            key={index}
            className=" mb-[-50px] pr-5 pt-3 border-gray-200 text-base font-medium"
          >
            {weekday}
          </div>
        ))}
        {weeks.map((week, weekIndex, weekday) =>
          week.map((day, dayIndex, weekday) => (
            <div
              key={dayIndex}
              className={`border border-gray-200 p-3 flex relative justify-between items-end flex-col h-[150px] w-[148px] ${
                day === today ? "border-teal-600 border" : ""
              }`}
              onMouseEnter={() => handleDayHover(Number(day))}
              onMouseLeave={handleMouseLeave}
              onClick={handleDayClick}
              style={{ cursor: "pointer" }}
            >
              <span></span>
              <div className="w-[120px]" dir="ltr">
                {day !== "" && (
                  <div className="flex justify-between items-center">
                    <p className="text-base font-medium">{day}</p>
                    <div>
                      {hoveredDay === day && (
                        <span className=" bg-teal-600 flex items-center justify-center rounded">
                          {icons.plus_square("white", "24px")}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow">
            <p>مدال</p>
            <button onClick={handleCloseModal}>
              {icons.close("black", "20px")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
