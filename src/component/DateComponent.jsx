import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new window.Date());
  const [endDate, setEndDate] = useState(new window.Date());

  const HandleSubmit = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        // calendarContainer={document.body}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        // calendarContainer={document.body}
      />
      <div>
        Selected range:
        {startDate.toDateString()} - {endDate ? endDate.toDateString() : "..."}
      </div>
      <button onClick={() => HandleSubmit(startDate, endDate)}>
        {" "}
        Export date button{" "}
      </button>
    </div>
  );
};

export default DateComponent;
