import React from "react";

export default function DayPlannerFormWorkoutsList({
  workouts,
  addDay,
  getDays,
  arrayHelpers,
}) {
  if (workouts) {
    return (
      <ul>
        {workouts.map((workout) => {
          return (
            <div className="workout-card" key={workout.name}>
              <h5 className="workout-name">{workout.name}</h5>
              <button
                type="button"
                className="workout-add"
                onClick={() => arrayHelpers.push({ name: workout.name })}
              >
                Add
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}
