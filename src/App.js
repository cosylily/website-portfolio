import "./App.css";
import Certs from "./Showcertificates.js";
import { useState } from "react";
import Footer from "./Bottompage.js";
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
                <p>
                  {" "}
                  Hello World! My name is Syafiqah, an aspiring junior website
                  developer from Malaysia.
                </p>
              </div>

              <div className="aboutIntro">
                <p>
                  I graduated from University of Manchester under the degree of
                  Politics, Philosophy and Economics. For people whom may
                  wonder, I prefer Philosophy the most followed by Economics
                  (tired of this question if I am being honest {">_<"}
                  ). I love crocheting and do traditional Japanese archery on
                  Sundays.
                </p>
                <video
                  src="/horizontalkyudo.mov"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted="true"
                  playsinline
                ></video>
              </div>
            </div>
          </div>
          <div className="websiteSection section">
            <div className="websiteTitle">
              <p className="website">Website</p>
              <p className="collection">Collection</p>
            </div>

            <div className="websiteVids">
              <div className="rowone">
                <button className="videobutton">
                  <div className="individualvideos vidone">
                    <video
                      src="/lifeupdate.mov"
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted="true"
                      playsinline
                    ></video>
                  </div>
                </button>

                <div className="emptyspaces"></div>
                <div className="emptyspaces"></div>
              </div>
              <div className="rowtwo">
                <div className="emptyspaces"></div>
                <button className="videobutton">
                  <div className="individualvideos vidtwo">
                    <video
                      src="
            /tsurunefanpage-1.mov"
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted="true"
                      playsinline
                    ></video>
                  </div>
                </button>

                <div className="emptyspaces"></div>
              </div>
              <div className="rowthree">
                <div className="emptyspaces"></div>
                <div className="emptyspaces"></div>
                <button className="videobutton">
                  <div className="individualvideos vidthree">
                    <video
                      src="/newpaperbirthdaytheme.mov"
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted="true"
                      playsinline
                    ></video>
                  </div>
                </button>
              </div>
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
              <p>
                2025-2026 Prompt Engineering with TalentLabs MyMahir FSTC GBS
                Train-and-Place Programme 2025 (Incomplete)
              </p>
              <p>2025-2026 Digital Marketing with Acadium (Incomplete)</p>
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
      </div>

      <Footer />
    </div>
  );
}

export default App;
