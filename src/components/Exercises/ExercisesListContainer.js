import React, { useState } from "react";
import ExerciseListItem from "./ExerciseListItemContainer";

export default function ExercisesListContainer() {
  const [exercises, setExercises] = useState([
    {
      name: "Ring Pull-Ups",
      sets: "3",
      reps: "10",
      notes: "",
    },
    {
      name: "Ring Back Lever Pull-Ups",
      sets: "3",
      reps: "5",
      notes: "",
    },
    {
      name: "Ring L-sit Chin-Ups",
      sets: "3",
      reps: "5",
      notes: "",
    },
  ]);

  return (
    <div>
      <h2>Exercises List</h2>
      <h3>Exercises</h3>
      <ul>
        {exercises.map((exercise) => (
          <ExerciseListItem exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}
