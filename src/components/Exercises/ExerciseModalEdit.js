import React from "react";
import Popup from "reactjs-popup";
import { Formik, Field, Form } from "formik";

export default function ExerciseModalEdit({
  Trigger,
  exercise,
  addExercise,
  updateExercises,
}) {
  return (
    <Popup trigger={<Trigger exercise={exercise} />} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <ExerciseModalForm
            close={close}
            exercise={exercise}
            addExercise={addExercise}
            updateExercises={updateExercises}
          />
        </div>
      )}
    </Popup>
  );
}

function ExerciseModalForm({ exercise, addExercise, updateExercises, close }) {
  return (
    <div>
      <div className="header"> Edit {exercise && exercise.name} </div>
      <Formik
        initialValues={{
          name: "",
          notes: "",
        }}
        onSubmit={(values) => {
          addExercise(values);
          updateExercises();
          close();
        }}
      >
        <Form className="content">
          <label htmlFor="name">Exercise Name</label>
          <Field id="name" name="name" />

          <label htmlFor="notes">Notes</label>
          <Field id="notes" name="notes" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
