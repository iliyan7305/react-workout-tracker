import React from "react";
import ExercisesListContainer from "../components/Exercises/ExercisesListContainer";
import ExerciseNew from "../components/Exercises/ExerciseNew";

export default function Exercises() {
  return (
    <div>
      <ExerciseNew />
      <ExercisesListContainer />
    </div>
  );
}
