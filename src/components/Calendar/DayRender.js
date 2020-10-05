import React from "react";
import { Link } from "react-router-dom";

export default function DayRender({
  month,
  year,
  dayName,
  dateNumber,
  meals,
  workouts,
}) {
  return (
    <Link to={"/schedule/" + year + "-" + month + "-" + dateNumber}>
      <div>
        <h1>{dayName}</h1>
        <h1>{dateNumber}</h1>
      </div>

      {meals}
      {workouts}
    </Link>
  );
}
