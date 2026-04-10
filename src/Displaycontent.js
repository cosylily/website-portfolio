import React from "react";
import About from "./About.js";
import Education from "./Education.js";
import Showcerts from "./Showcertificates.js";

export default function DisplayContent(props) {
  if (props.name === "about") {
    return <About />;
  }
  if (props.name === "education") {
    return <Education />;
  }
  if (props.name === "certificates") {
    return <Showcerts />;
  } else {
    return <div>Click any button to start!</div>;
  }
}
