import React from "react";

export default function StyledButtonWrapper({ render }) {
  return <div className="styled-button">{render()}</div>;
}
