import React from "react";
import "./App.css";
import About from "./About.js";
import Education from "./Education.js";
import Showcerts from "./Showcertificates.js";
import Websites from "./Websites.js";
import Contacts from "./Displaycontacts.js";

export default function DisplayContent(props) {
  if (props.name === "about") {
    return <About />;
  }
  if (props.name === "education") {
    return <Education />;
  }
  if (props.name === "certificates") {
    return <Showcerts />;
  }
  if (props.name === "websites") {
    return <Websites />;
  }
  if (props.name === "contacts") {
    return <Contacts />;
  } else {
    return (
      <div>
        <h1 className="p-3 m-3 prompt">
          Hi 👋🏻 Welcome to my portfolio. Click any button at the side to begin!
        </h1>
      </div>
    );
  }
}
