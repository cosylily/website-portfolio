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
        <h1 className="p-3 m-3 prompt">Hi!{"  "} Welcome to</h1>
        <header className="title" id="toppage">
          <h2>Syafiqah's</h2>
          <div>
            <img
              src="logoforportfolio.jpg"
              alt="Self-doodle logo"
              height="100px"
              width="auto"
            />
          </div>
          <h2>Portfolio</h2>
        </header>
      </div>
    );
  }
}
