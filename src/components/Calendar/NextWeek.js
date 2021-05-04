import React from "react";
import StyledButtonWrapper from "../StyledButtonWrapper";

export default function NextWeek({ next }) {
  return (
    <StyledButtonWrapper
      render={() => <button onClick={next}>next week</button>}
    />
  );
}
