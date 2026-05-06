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
        <div className="greetings">
          <h1 className="p-3 m-3 prompt">
            Hi there 🙃 Welcome to my portfolio!
          </h1>
          <h2>
            I am Syafiqah Dayana, an aspiring website designer and junior
            front-end developer!
          </h2>
          <h2>Based in Kuala Lumpur, Malaysia 🇲🇾</h2>
        </div>
        <div>
          <h2>About me:</h2>
          <p>
            I am a recent graduate from University of Manchester under the
            degree of Politics, Philosophy and Economics. During my degree, I
            had the chance to learn about website design and became very
            interested in it!
          </p>
          <button>Learn more here</button>
        </div>
        <div>
          <h2>Education and Qualifications</h2>
          <p>
            My degree is BA Politics, Philosophy and Economics and I am heavily
            interested in Philosophy & Economics! If you are interested, let's
            talk about them! I also had the initiative to take an online course
            for my website developing skills. Some coding languages that I am
            skilled in are HTML, CSS and Javascript.
          </p>
          <button>My education</button> <button>My Qualifications</button>
        </div>
      </div>
    );
  }
}
