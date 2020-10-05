import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DayContainer } from "../Calendar";

export default function Calendar() {
  const [date, setDate] = useState(new Date(Date.now()));

  return (
    <div>
      <Month date={date} />
      <WeekDays date={date} />
    </div>
  );
}

// function WeekDays({ date }) {
//   const [daysHtmlArr, setDaysHtmlArr] = useState([]);

//   useEffect(() => {
//     let htmlArr = [];
//     let testArr = [];

//     // 0-6
//     let dayOfWeek = date.getDay();
//     let firstDayOfWeek = new Date(date.getDate() - dayOfWeek);

//     for (let i = 0; i < 7; i++) {
//       testArr.push(i);
//       htmlArr.push(new Date(firstDayOfWeek.getDate() + i));
//     }

//     console.log(htmlArr);
//     let test = htmlArr.map((date, i) => (
//       <li key={i}>
//         <DayContainer date={date} />
//       </li>
//     ));

//     setDaysHtmlArr(test);
//   }, [date]);

//   return <ul className="weekdays">{daysHtmlArr}</ul>;
// }

// safekeep
function WeekDays({ date }) {
  const [daysHtmlArr, setDaysHtmlArr] = useState([]);

  useEffect(() => {
    let htmlArr = [];

    // 0-6
    let dayOfWeek = date.getDay();
    let firstDayOfWeek = new Date();
    firstDayOfWeek.setDate(date.getDate() - dayOfWeek);
    for (let i = 0; i < 7; i++) {
      htmlArr.push(
        <li key={i}>
          <DayContainer firstDayOfWeek={firstDayOfWeek} index={i} />
        </li>
      );
    }

    setDaysHtmlArr(htmlArr);
  }, [date]);

  return <ul className="weekdays">{daysHtmlArr}</ul>;
}

function Month({ date }) {
  const [state, setState] = useState({ year: 0, month: "" });

  useEffect(() => {
    let year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });

    setState({ ...date, year: year, month: month });
  }, [date]);

  return (
    <div className="month">
      <ul>
        <li className="prev">&#10094;</li>
        <li className="next">&#10095;</li>
        <li>
          {state.month}
          <br></br>
          <span style={{ fontSize: 18 + "px" }}>{state.year}</span>
        </li>
      </ul>
    </div>
  );
}
