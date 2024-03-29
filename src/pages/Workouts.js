import React, { useState, useEffect } from "react";
import WorkoutsList from "../components/Workouts/WorkoutsListContainer";
import WorkoutsNewContainer from "../components/Workouts/WorkoutsNewContainer";

export default function Workouts() {
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

  return (
    <div>
      <WorkoutsNewContainer addWorkout={addWorkout} />
      <WorkoutsList workouts={workouts} />
    </div>
  );
}
