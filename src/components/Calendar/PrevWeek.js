import React from "react";
import StyledButtonWrapper from "../StyledButtonWrapper";

export default function PrevWeek({ prev }) {
  return (
    <StyledButtonWrapper
      render={() => <button onClick={prev}>PrevWeek</button>}
    />
  );
}
