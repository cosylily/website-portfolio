import React from "react";
import About from "./About.js";
import Education from "./Education.js";

export default function DisplayContent(props) {
  if (props.name === "about") {
    return <About />;
  }
  if (props.name === "education") {
    return <Education />;
  } else {
    return <div>Click any button to start!</div>;
  }
}
