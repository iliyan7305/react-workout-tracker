import React from "react";
import Popup from "reactjs-popup";
import { Formik, Field, FieldArray, Form } from "formik";
import WorkoutsDataProvider from "../WorkoutsDataProvider";
import DayPlannerFormWorkoutsList from "./DayPlannerFormWorkoutsList";

export default function DayPlannerModal({ render, dayHelpers, date }) {
  return (
    <Popup trigger={render()} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <DayPlannerModalForm
            close={close}
            dayHelpers={dayHelpers}
            date={date}
          />
        </div>
      )}
    </Popup>
  );
}

function DayPlannerModalForm({ workout, addWorkout, close, dayHelpers, date }) {
  let initialValues = {
    name: "",
    workouts: [],
    notes: "",
  };

  let plannedDays = dayHelpers.getDays();
  if (plannedDays) {
    let day = plannedDays.reduce((acc, day) => {
      if (day.name == date.getTime()) {
        return day;
      }
    }, {});

    if (day) {
      initialValues = day;
      console.log(day);
    }
  }

  return (
    <div>
      <div className="header"> Edit {workout && workout.name} </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          values.name = date.getTime();
          dayHelpers.addDay(values);
          close();
        }}
        render={(data) => (
          <Form className="content">
            <FieldArray name="workouts">
              {(arrayHelpers) => {
                return (
                  <div>
                    {data.values.workouts &&
                      data.values.workouts.length > 0 &&
                      data.values.workouts.map((workout, index) => (
                        <div key={index} className="exercise-card-workouts">
                          <div className="child">
                            <label htmlFor={`workouts[${index}].name`}>
                              Name
                            </label>
                            <Field
                              id={`workouts[${index}].name`}
                              name={`workouts[${index}].name`}
                            />
                          </div>
                        </div>
                      ))}

                    <WorkoutsDataProvider
                      render={(data) => (
                        <DayPlannerFormWorkoutsList
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
