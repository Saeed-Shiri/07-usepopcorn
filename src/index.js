import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./SrarRating";

function TestStar() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={"sa"} onSetRating={setMovieRating} />
      <p>the movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating="{ff}"
      // messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating size={"fghgf"} color="red" className="test" />
    <TestStar />
  </React.StrictMode>
);
