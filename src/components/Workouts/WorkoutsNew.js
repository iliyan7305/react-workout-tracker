import React, { useState } from "react";
import WorkoutModalEdit from "./WorkoutModalEdit";

export default function WorkoutsNewContainer({ addWorkout }) {
  return <WorkoutModalEdit Trigger={WorkoutNew} addWorkout={addWorkout} />;
}

function WorkoutNew({ onClick }) {
  return <button onClick={onClick}>&#43; New</button>;
}
