import React, { useEffect, useState } from "react";

export default function WorkoutsDataProvider({ render }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    updateWorkouts();
  }, []);

  const updateWorkouts = () => {
    let storedWorkouts = window.localStorage.getItem("workouts");
    if (storedWorkouts) {
      let workouts = JSON.parse(storedWorkouts);
      setWorkouts(workouts);
    }
  };

  const addWorkout = (workout) => {
    let storedWorkouts = window.localStorage.getItem("workouts");
    storedWorkouts = JSON.parse(storedWorkouts);
    if (storedWorkouts && storedWorkouts.push) {
      storedWorkouts.push(workout);
    } else {
      storedWorkouts = [workout];
    }
    window.localStorage.setItem("workouts", JSON.stringify(storedWorkouts));
    updateWorkouts();
  };

  let data = {
    workouts: workouts,
    updateWorkouts: updateWorkouts,
    addWorkout: addWorkout,
  };

  return <div>{render(data)}</div>;
}
