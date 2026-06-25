import "./App.css";
import Certs from "./Showcertificates.js";
import { useState } from "react";
import Footer from "./Bottompage.js";
import DisplayWeb from "./Websites.js";

function App() {
  let [isActive, setActive] = useState(false);
  function handleActive() {
    setActive(!isActive);
  }
  return (
    <div className="App">
      <div className="clouds">
        <div className="cloud">
          <div className="cloudone"></div>
          <div className="cloudtwo"></div>
          <div className="cloudthree"></div>
        </div>

        <div className="cloud">
          <div className="cloudone"></div>
          <div className="cloudtwo"></div>
          <div className="cloudthree"></div>
        </div>
        <div className="cloud">
          <div className="cloudone"></div>
          <div className="cloudtwo"></div>
          <div className="cloudthree"></div>
        </div>
      </div>
      <div className="space"></div>
      <div className="alltogether">
        <div className="toppage">
          <div className="title">
            <div className="smallletters">
              <p className="name">Syafiqah's</p>
              <img
                src="/logoforportfolio.jpg"
                alt="My own logo doodling"
                height="40px"
                width="auto"
                className="logo"
              />
            </div>
            <p className="portfolio">PORTFOLIO</p>
          </div>
        </div>
        <div>
          <div className="aboutSection section">
            <div className="aboutTitle">
              <p className="abouts">About</p>
              <p className="me">Me</p>
            </div>

            <div className="aboutMe">
              <div className="aboutVideo">
                <video
                  src="./syafiqahprofilelive.mov"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted="true"
                  playsinline
                ></video>
              </div>

              <div className="aboutIntro">
                <ul>
                  <li>
                    <p>Syafiqah Dayana Binti Borhan</p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto:syafiqah.borhan1205@gmail.com">
                        syafiqah.borhan1205@gmail.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Git Hub Profile:{" "}
                      <a href="https://github.com/cosylily">cosylily</a>
                    </p>
                  </li>
                  <li>
                    <p>University of Manchester</p>
                  </li>
                  <li>
                    <p>BA(Hons) Politics, Philosophy and Economics</p>
                  </li>
                  <li>
                    <p>Coding Languages: HTML, CSS, JavaScript and React.js</p>
                  </li>
                  <li>
                    <p>Hobbies: Kyudo and Crocheting</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="websiteSection section">
            <div className="websiteTitle">
              <p className="website">Website</p>
              <p className="collection">Collection</p>
            </div>

            <div className="websiteVids">
              <DisplayWeb />
            </div>
          </div>
          <div className="educationSection section">
            <div className="educationTitle">
              <p className="education">Education</p>
              <p className="and text-center">&</p>
              <p className="certifications text-end">Certifications</p>
            </div>
            <div className="listofedu">
              <p>2020-2022 A-levels in Kolej Mara Seremban</p>
              <p>
                2022-2025 BA (Hons) Politics, Philosophy and Economics in
                University of Manchester
              </p>
              <p>2024-2025 Front-end Diploma with Shecodes</p>
            </div>

            <button onClick={handleActive} className="certbutton">
              <div className={isActive ? "certnone" : "certdis"}>
                Click for certifications
              </div>
              <div className={isActive ? "updis" : "upnone"}>
                ⏫ Click to close this section
              </div>
            </button>
            <div className={isActive ? "display" : "d-none"}>
              <Certs />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
