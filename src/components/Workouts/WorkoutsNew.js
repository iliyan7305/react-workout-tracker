import React, { useState } from "react";
import WorkoutModalEdit from "./WorkoutModalEdit";

export default function WorkoutsNewContainer({ addWorkout }) {
  return <WorkoutModalEdit Trigger={WorkoutNew} addWorkout={addWorkout} />;
}

function WorkoutNew({ onClick }) {
  return (
    <div className="new-workout-button">
      <button onClick={onClick}>&#43; New</button>
    </div>
  );
}
