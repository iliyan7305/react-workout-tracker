import React from "react";
import { Calendar } from "../components";
import DayDataProvider from "../components/DayDataProvider";

export default function HomePage() {
  return (
    <div>
      <DayDataProvider render={(data) => <Calendar {...data} />} />
    </div>
  );
}
