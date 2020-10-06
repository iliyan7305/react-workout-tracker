import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Workouts, Exercises } from "../pages";
import { Header, DayPlannerContainer } from "../components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="schedule/:id" element={<DayPlannerContainer />} />
        </Route>{" "}
        <Route path="/workouts" element={<Workouts />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
      </Routes>
    </div>
  );
}

export default App;
