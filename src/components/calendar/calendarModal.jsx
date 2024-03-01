import React, { useState } from "react";
import jaliliMoment from "jalali-moment";
import jalaliMoment from "jalali-moment";
import BigCalendar from "jalali-react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const CalendarModal = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startDatee, setStartDatee] = useState(null);
  const [endDatee, setEndDatee] = useState(null);
  //   const [events, setEvents] = useState([]);

  const handleNavigate = (newDate) => {
    const jalaliNewDate = jaliliMoment(newDate).locale("fa");
    const formattedDate = jalaliNewDate.format("jD MMMM");
    const formattedDate2 = jalaliMoment(newDate)
      .locale("en")
      .format("YYYY-MM-DDTHH:mm:ss");
    if (!startDate || (startDate && endDate)) {
      console.log(newDate);
      setStartDate(formattedDate);
      setStartDatee(formattedDate2);
      setEndDatee(null);
      setEndDate(null);
    } else if (!endDate) {
      setEndDate(formattedDate);
      setEndDatee(formattedDate2);
    }
  };
  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };
  const today = jaliliMoment().locale("fa").format("dddd");
  const slightlyLater = jaliliMoment()
    .add(1, "minutes")
    .locale("fa")
    .format("HH:mm");
  const tomorrow = jaliliMoment().add(1, "days").locale("fa").format("dddd");
  const thisWeekend = jaliliMoment().isoWeekday(5).locale("fa").format("dddd");
  const nextWeek = jaliliMoment()
    .add(1, "week")
    .isoWeekday(6)
    .locale("fa")
    .format("dddd");
  const nextWeekend = jaliliMoment()
    .add(1, "week")
    .isoWeekday(5)
    .locale("fa")
    .format("jD MMMM");
  const twoWeeksLater = jaliliMoment()
    .add(2, "weeks")
    .locale("fa")
    .format("jD MMMM");
  const fourWeeksLater = jaliliMoment()
    .add(4, "weeks")
    .locale("fa")
    .format("jD MMMM");
  const CustomToolbar = (toolbar) => {
    const navigate = (action) => {
      toolbar.onNavigate(action);
    };

    const goToBack = () => {
      navigate("PREV");
    };

    const goToNext = () => {
      navigate("NEXT");
    };

    const goToToday = () => {
      navigate("TODAY");
    };

    const dateDisplayFormat = "jMMMM jYYYY";

    const currentDate = jaliliMoment(toolbar.date);
    const currentMonth = currentDate.format(dateDisplayFormat);

    return (
      <div className="rbc-toolbar">
        <div className="rbc-toolbar-label">{currentMonth}</div>
        <div className="rbc-btn-group">
          <button type="button" onClick={goToBack} style={{ border: 0 }}>
            قبلی
          </button>

          <button type="button" onClick={goToNext} style={{ border: 0 }}>
            بعدی
          </button>
          <button type="button" onClick={goToToday} style={{ border: 0 }}>
            امروز
          </button>
        </div>
      </div>
    );
  };
  //
  const events = [
    {
      start: moment(`${startDatee}`).toDate(),
      end: moment(`${endDatee}`).toDate(),
    },
  ];

  return (
    <div dir="rtl" className="bg-white border-2 cal">
      {isCalendarOpen && (
        <>
          <div className="grid grid-cols-2 justify-items-start p-5 py-8 border-b item-center">
            <div>
              <p className="text-2xl font-medium p-2">
                زمان شروع: {startDate ? startDate.toString() : ""}
              </p>
            </div>
            <div>
              <p className="text-2xl font-medium p-2 border-r">
                زمان پایان: {endDate ? endDate.toString() : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className="flex flex-col cal_list"
              style={{ width: 293, height: 510 }}
            >
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">امروز :</p>
                <p className="text-base font-medium text-gray-500">{today}</p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">کمی بعد: </p>
                <p className="text-base font-medium text-gray-500">
                  {slightlyLater}
                </p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">فردا: </p>
                <p className="text-base font-medium text-gray-500">
                  {tomorrow}
                </p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">این آخر هفته: </p>
                <p className="text-base font-medium text-gray-500">
                  {thisWeekend}
                </p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">هفته آینده: </p>
                <p className="text-base font-medium text-gray-500">
                  {nextWeek}
                </p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">آخر هفته آینده:</p>
                <p className="text-base font-medium text-gray-500">
                  {" "}
                  {nextWeekend}
                </p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">دو هفته دیگر: </p>
                <p className="text-base font-medium text-gray-500">
                  {twoWeeksLater}
                </p>
              </div>
              <div className="flex justify-between px-6 py-3.5 items-center">
                <p className="text-xl">۴ هفته بعد:</p>
                <p className="text-base font-medium text-gray-500">
                  {fourWeeksLater}
                </p>
              </div>
            </div>
            <div>
              <BigCalendar
                onNavigate={handleNavigate}
                views={["month"]}
                events={events}
                style={{ height: 500, width: 600 }}
                components={{
                  toolbar: CustomToolbar,
                }}
              />
              <div>
                <button className="text-left" onClick={handleCloseCalendar}>
                  بستن
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarModal;
