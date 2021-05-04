import React from "react";

export default function DayRender({
  month,
  year,
  dayName,
  dateNumber,
  meals,
  workouts,
  onClick,
}) {
  return (
    <a onClick={onClick}>
      <div>
        <h1 className="name">{dayName}</h1>
        <h1 className="number">{dateNumber}</h1>
      </div>

      {meals}
      {workouts}
    </a>
  );
}
