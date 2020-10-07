import React from "react";
import Popup from "reactjs-popup";

export default function ExerciseModalEdit({ Trigger, exercise }) {
  return (
    <Popup trigger={<Trigger exercise={exercise} />} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Edit {exercise && exercise.name} </div>
          <div className="content">{exercise && exercise.notes}</div>
        </div>
      )}
    </Popup>
  );
}
