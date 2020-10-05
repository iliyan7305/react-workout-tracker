import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/exercises">Exercises</Link>
      </nav>
    </header>
  );
}
