import React, { useState } from "react";
import ExerciseModalEdit from "./ExerciseModalEdit";

export default function ExerciseNewContainer({ addExercise, updateExercises }) {
  return (
    <ExerciseModalEdit
      Trigger={ExerciseNew}
      addExercise={addExercise}
      updateExercises={updateExercises}
    />
  );
}

function ExerciseNew({ onClick }) {
  return <button onClick={onClick}>&#43; New</button>;
}
