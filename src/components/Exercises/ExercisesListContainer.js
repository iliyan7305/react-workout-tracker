import React, { useEffect, useState } from "react";
import ExerciseListItemContainer from "./ExerciseListItemContainer";

export default function ExercisesListContainer({ exercises }) {
  return (
    <div>
      <h2>Exercises List</h2>
      <h3>Exercises</h3>
      <ul>
        {exercises.map((exercise) => (
          <ExerciseListItemContainer key={exercise.name} exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}
