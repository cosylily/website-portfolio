import "./App.css";
import Footerbottom from "./Bottompage.js";
import Content from "./Displaycontent.js";
import { useState } from "react";

function App() {
  let [content, setContent] = useState();

  return (
    <div className="App">
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
      <div className="canvas">
        <div className="buttons">
          <div className="buttonsinbuttons">
            <button onClick={changeHome} className="homebutton">
              Home
            </button>
            <button onClick={changeAbout} className="aboutbutton">
              About
            </button>
            <button onClick={changeEducation} className="edubutton">
              Education
            </button>
            <button onClick={changeCertificate} className="certbutton">
              Certificate
            </button>
            <button onClick={changeWebsites} className="webbutton">
              Websites
            </button>
            <button onClick={changeContact} className="contactbutton">
              Contact
            </button>
            <div className="papercomplete"></div>
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
  function changeHome() {
    setContent("Home");
  }
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
