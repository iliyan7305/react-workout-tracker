import React, { useState } from "react";
import WorkoutsListRender from "./WorkoutsListRender";

export default function WorkoutsListContainer() {
  const [workouts, setWorkouts] = useState([
    {
      name: "Pull Rings",
      exercises: [
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
      ],
      notes: "Basic all around pull workout",
    },
    {
      name: "Push Rings",
      exercises: [
        {
          name: "Ring Push-Ups",
          sets: "3",
          reps: "10",
          notes: "",
        },
        {
          name: "Ring Plance Knee Push-Ups",
          sets: "3",
          reps: "5",
          notes: "",
        },
        {
          name: "Ring Wide Push-Ups",
          sets: "3",
          reps: "5",
          notes: "",
        },
      ],
      notes: "Basic all around push workout",
    },
  ]);

  return (
    <div>
      <WorkoutsListRender workouts={workouts} />
    </div>
  );
}
