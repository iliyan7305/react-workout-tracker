import React from "react";
import Popup from "reactjs-popup";
import { Formik, Field, FieldArray, Form } from "formik";
import WorkoutFormExercisesList from "./WorkoutFormExercisesList";
import ExercisesDataProvider from "../ExercisesDataProvider";

export default function WorkoutModalEdit({ Trigger, workout, addWorkout }) {
  return (
    <Popup trigger={<Trigger workout={workout} />} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <WorkoutModalForm
            close={close}
            workout={workout}
            addWorkout={addWorkout}
          />
        </div>
      )}
    </Popup>
  );
}

function WorkoutModalForm({ workout, addWorkout, close }) {
  return (
    <div>
      <div className="header"> Edit {workout && workout.name} </div>
      <Formik
        initialValues={{
          name: "",
          exercises: [{ name: "Squat" }],
          notes: "",
        }}
        onSubmit={(values) => {
          addWorkout(values);
          close();
        }}
        render={(data) => (
          <Form className="content">
            <label htmlFor="name">Workout Name</label>
            <Field id="name" name="name" placeholder="Pull" />

            <FieldArray name="exercises">
              {(arrayHelpers) => {
                return (
                  <div>
                    {data.values.exercises &&
                      data.values.exercises.length > 0 &&
                      data.values.exercises.map((exercise, index) => (
                        <div key={index} className="exercise-card-workouts">
                          <div className="child">
                            <label htmlFor={`exercises[${index}].name`}>
                              Name
                            </label>
                            <Field
                              id={`exercises[${index}].name`}
                              name={`exercises[${index}].name`}
                            />
                          </div>
                          <div className="child">
                            <label htmlFor={`exercises[${index}].sets`}>
                              Sets
                            </label>
                            <Field
                              id={`exercises[${index}].sets`}
                              name={`exercises[${index}].sets`}
                            />
                          </div>
                          <div className="child">
                            <label htmlFor={`exercises[${index}].sets`}>
                              Reps
                            </label>
                            <Field
                              id={`exercises[${index}].sets`}
                              name={`exercises[${index}].reps`}
                            />
                          </div>
                        </div>
                      ))}
                    <ExercisesDataProvider
                      render={(data) => (
                        <WorkoutFormExercisesList
                          {...data}
                          arrayHelpers={arrayHelpers}
                        />
                      )}
                    />
                  </div>
                );
              }}
            </FieldArray>

            <label htmlFor="notes">Workout Notes</label>
            <Field id="notes" name="notes" placeholder="no pain, no grain" />
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
}
