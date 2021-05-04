import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Workouts, Exercises } from "../pages";
import { Header } from "../components";
import ExercisesDataProvider from "./ExercisesDataProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/workouts" element={<Workouts />}></Route>
        <Route
          path="/exercises"
          element={
            <ExercisesDataProvider render={(data) => <Exercises {...data} />} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
