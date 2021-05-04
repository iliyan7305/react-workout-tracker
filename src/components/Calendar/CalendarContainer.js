import React, { useState, useEffect } from "react";
import { DayContainer } from "../Calendar";
import PrevWeek from "./PrevWeek";
import NextWeek from "./NextWeek";

export default function Calendar({ dayHelpers }) {
  const [date, setDate] = useState(new Date(Date.now()));

  const showPrevWeek = () => {
    let newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 7
    );
    setDate(newDate);
  };
  const showNextWeek = () => {
    let newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 7
    );
    setDate(newDate);
  };

  const prevMonth = () => {
    let newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  };
  const nextMonth = () => {
    let newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  };

  return (
    <div>
      <Month date={date} next={nextMonth} prev={prevMonth} />
      <WeekDays
        date={date}
        next={showNextWeek}
        prev={showPrevWeek}
        dayHelpers={dayHelpers}
      />
    </div>
  );
}

function WeekDays({ date, next, prev, dayHelpers }) {
  const [daysHtmlArr, setDaysHtmlArr] = useState([]);

  useEffect(() => {
    setDaysHtmlArr(getWeek(date));
  }, [date]);

  const getWeek = (date) => {
    let htmlArr = [];

    let dayOfWeek = date.getDay();
    let firstDayOfWeek = new Date(date);
    firstDayOfWeek.setDate(date.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
      htmlArr.push(
        <li key={i} className="day">
          <DayContainer
            firstDayOfWeek={firstDayOfWeek}
            index={i}
            dayHelpers={dayHelpers}
          />
        </li>
      );
    }

    return htmlArr;
  };

  return (
    <div>
      <PrevWeek prev={prev} />
      <NextWeek next={next} />
      <ul className="weekdays">{daysHtmlArr}</ul>
    </div>
  );
}

function Month({ date, next, prev }) {
  const [state, setState] = useState({ year: 0, month: "" });

  useEffect(() => {
    let year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });

    setState({ ...date, year: year, month: month });
  }, [date]);

  return (
    <div className="month">
      <ul>
        <li onClick={prev} className="prev">
          &#10094;
        </li>
        <li onClick={next} className="next">
          &#10095;
        </li>
        <li>
          <span className="month">{state.month}</span>
          <br></br>
          <span className="year">{state.year}</span>
        </li>
      </ul>
    </div>
  );
}
