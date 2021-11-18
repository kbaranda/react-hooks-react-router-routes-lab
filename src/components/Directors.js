import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div key={director.name}>
            <p>{director.name}</p>
            {director.movies.map((movie) => {
              return (
                <ul key={movie}>
                  <li>{movie}</li>
                </ul>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Directors;
