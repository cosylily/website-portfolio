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
          <div className="aboutSection">
            <h2>About Me!</h2>
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
                <p>
                  Hello World! My name is Syafiqah, an aspiring junior website
                  developer from Malaysia. Before I continue to introduce
                  myself, this website does not only act as my portfolio but I
                  hope to make new friends through here (which explains my hobby
                  section =D).{" "}
                </p>
                <p>
                  {" "}
                  I graduated from University of Manchester under the degree of
                  Politics, Philosophy and Economics, focusing more on
                  Philosophy and Economics. During my studies, I took an online
                  course focusing on front-end development and has mastered
                  HTML, CSS, JavaScript and React.js. Throughout the online
                  course, I was able to design clock app, weather app, a
                  dictionary and simple websites. I also learned Figma and honed
                  my skill on using it though designing my own websites (though
                  I prefer wireframes more). I would say my work flow is more
                  flexible and I work quicker when using wireframes. I have yet
                  to specialise in any industry but I imagine my forte will be
                  in helping others in designing their portfolio and writing. I
                  am sure that with my skills, I will be able to understand your
                  idea and materialise it.
                </p>
              </div>
            </div>
          </div>
          <div className="websiteSection section">
            <h2 className="text-center pt-5">Websites Collection</h2>
            <div className="websiteVids">
              <div className="individualvideos">
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
              <div className="individualvideos">
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
              <div className="individualvideos">
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
            </div>
          </div>
          <div className="educationSection section">
            <h2 className="text-center">Education and Certifications</h2>
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
            <button onClick={handleActive}>Click for certifications</button>
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
