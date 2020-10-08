import React from "react";

export default function ExercisesDataProvider({ render }) {
  const getExercises = () => {
    let storedExercises = window.localStorage.getItem("exercises");
    let exercises;
    if (storedExercises) {
      exercises = JSON.parse(storedExercises);
    }
    return exercises;
  };

  const addExercise = (exercise) => {
    let storedExercises = window.localStorage.getItem("exercises");
    storedExercises = JSON.parse(storedExercises);
    if (storedExercises && storedExercises.push) {
      storedExercises.push(exercise);
    } else {
      storedExercises = [exercise];
    }
    window.localStorage.setItem("exercises", JSON.stringify(storedExercises));
  };

  let exercises = getExercises();

  let data = {
    exercises: exercises,
    getExercises: getExercises,
    addExercise: addExercise,
  };

  return <div>{render(data)}</div>;
}
