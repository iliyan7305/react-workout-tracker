import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function ExerciseModal({ Trigger, exercise }) {
  return (
    <Popup trigger={<Trigger exercise={exercise} />} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {exercise.name} </div>
          <div className="content">{exercise.notes}</div>
        </div>
      )}
    </Popup>
  );
}
