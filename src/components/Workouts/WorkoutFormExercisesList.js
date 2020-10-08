import React from "react";

export default function WorkoutFormExercisesList({
  exercises,
  addExercise,
  getExercises,
  arrayHelpers,
}) {
  if (exercises) {
    return (
      <ul>
        {exercises.map((exercise) => {
          return (
            <div className="exercise-card" key={exercise.name}>
              <h5 className="exercise-name">{exercise.name}</h5>
              <button
                type="button"
                className="exercise-add"
                onClick={() => arrayHelpers.push({ name: exercise.name })}
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
