import React, { useState } from "react";
import WorkoutsListRender from "./WorkoutsListRender";

export default function WorkoutsListContainer({ workouts }) {
  return (
    <div>
      <WorkoutsListRender workouts={workouts} />
    </div>
  );
}
