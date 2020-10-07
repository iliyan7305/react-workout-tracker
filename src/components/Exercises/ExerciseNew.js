import React, { useState } from "react";
import ExerciseModalEdit from "./ExerciseModalEdit";

export default function ExerciseNewContainer() {
  const [exercise, setExercise] = useState({});

  return <ExerciseModalEdit Trigger={ExerciseNew} />;
}

function ExerciseNew({ onClick }) {
  return <button onClick={onClick}>&#43; New</button>;
}
