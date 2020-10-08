import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
        <li>
          <Link to="/exercises">Exercises</Link>
        </li>
      </ul>
    </nav>
  );
}
