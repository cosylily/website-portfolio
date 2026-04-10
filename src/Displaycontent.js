import React from "react";
import About from "./About.js";

export default function DisplayContent(props) {
  if (props.name === "about") {
    return <About />;
  }
  if (props.name === "education") {
    return <div>education</div>;
  } else {
    return <div>Click any button to start!</div>;
  }
}
