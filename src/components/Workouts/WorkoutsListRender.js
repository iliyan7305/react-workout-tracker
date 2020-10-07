import React from "react";

export default function WorkoutsListRender({ workouts }) {
  return (
    <ul className="workouts-list">
      {workouts.map((workout) => (
        <li className="workout">
          <h3>{workout.name}</h3>
          <div>
            <h4>Exercises</h4>
            <ul className="exercises">
              {workout.exercises.map((exercise) => (
                <li className="exercise">
                  <h5>{exercise.name}</h5>
                  <div>
                    <span>Sets</span> {exercise.sets}
                  </div>
                  <div>
                    <span>Reps</span> {exercise.reps}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Notes</h4>
            {workout.notes}
          </div>
        </li>
      ))}
    </ul>
  );
}
