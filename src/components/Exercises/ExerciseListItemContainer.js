import React from "react";
import ExerciseModal from "./ExerciseModal";

export default function ExerciseListItemContainer({ exercise }) {
  return (
    <div>
      <ExerciseModal Trigger={ExerciseListItem} exercise={exercise} />
    </div>
  );
}

function ExerciseListItem({ exercise, onClick }) {
  return (
    <div className="exercise-card" onClick={onClick}>
      <h5>{exercise.name}</h5>
    </div>
  );
}
