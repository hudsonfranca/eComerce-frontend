import React from "react";
import { Link } from "react-router-dom";

export default function Index({ history }) {
  return (
    <div>
      <h1>
        <Link to="/signin">Index Page</Link>
      </h1>
    </div>
  );
}
