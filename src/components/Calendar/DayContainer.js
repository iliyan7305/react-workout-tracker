import React, { useState, useEffect } from "react";
import conf from "../../conf/helper";
import DayRender from "./DayRender";
import { MealsSmall, WorkoutSmall } from "../";
import DayPlannerModal from "./DayPlannerModal";

export default function DayContainer({ firstDayOfWeek, index, dayHelpers }) {
  const [date, setDate] = useState();
  const [state, setState] = useState({
    month: "",
    year: "",
    dayName: "",
    dateNumber: "",
  });

  // component
  const [meals, setMeals] = useState(<MealsSmall />);
  // component
  const [workouts, setWorkouts] = useState(<WorkoutSmall />);

  useEffect(() => {
    let date = new Date(
      firstDayOfWeek.getFullYear(),
      firstDayOfWeek.getMonth(),
      firstDayOfWeek.getDate() + index
    );

    setDate(date);

    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayName = conf.weekDaysShort[date.getDay()];
    let dateNumber = date.getDate();
    // get meals and workouts here for now default use

    setState({
      month: month,
      year: year,
      dayName: dayName,
      dateNumber: dateNumber,
    });
  }, [firstDayOfWeek, index]);

  return (
    <DayPlannerModal
      render={(data) => (
        <DayRender {...state} meals={meals} workouts={workouts} />
      )}
      date={date}
      dayHelpers={dayHelpers}
    />
  );
}
