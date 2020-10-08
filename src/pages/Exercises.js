import React, { useEffect, useState } from "react";
import ExercisesListContainer from "../components/Exercises/ExercisesListContainer";
import ExerciseNew from "../components/Exercises/ExerciseNew";

export default function Exercises({ exercises, addExercise, getExercises }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(exercises);
  }, [exercises]);

  const updateExercises = () => {
    setState(getExercises());
  };

  return (
    <div>
      <ExerciseNew
        addExercise={addExercise}
        updateExercises={updateExercises}
      />
      <ExercisesListContainer exercises={state} />
    </div>
  );
}
