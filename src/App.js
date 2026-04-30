import "./App.css";
import Footerbottom from "./Bottompage.js";
import Content from "./Displaycontent.js";
import { useState } from "react";

function App() {
  let [content, setContent] = useState();

  return (
    <div className="App">
      <div className="canvas">
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
        <div className="buttons">
          <div className="buttonsinbuttons">
            <button onClick={changeAbout} className="aboutbutton">
              About
            </button>
            <button onClick={changeEducation}>Education</button>
            <button onClick={changeCertificate}>Certificate</button>
            <button onClick={changeWebsites}>Websites</button>
            <button onClick={changeContact}>Contact</button>
          </div>
        </div>
        <div className="emptyspace">
          <div className="introduction anchor">
            <Content name={content} />
          </div>
        </div>
      </div>
      <Footerbottom />
    </div>
  );

  function changeAbout() {
    setContent("about");
  }
  function changeEducation() {
    setContent("education");
  }
  function changeCertificate() {
    setContent("certificates");
  }
  function changeWebsites() {
    setContent("websites");
  }
  function changeContact() {
    setContent("contacts");
  }
}

export default App;
