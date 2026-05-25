import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="cloud">
        <div className="cloudone"></div>
        <div className="cloudtwo"></div>
        <div className="cloudthree"></div>
      </div>
      <div className="toppage">
        <h2 className="greeting">Greetings! Welcome to </h2>
        <div className="title">
          <h2>Syafiqah's</h2>
          <img
            src="/logoforportfolio.jpg"
            alt="My own logo doodling"
            height="100px"
            width="auto"
          />
          <h2>Portfolio</h2>
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
                developer from Malaysia. Before I continue to introduce myself,
                this website does not only act as my portfolio but I hope to
                make new friends through here (which explains my hobby section
                =D).{" "}
              </p>
              <p>
                {" "}
                I graduated from University of Manchester under the degree of
                Politics, Philosophy and Economics, focusing more on Philosophy
                and Economics. During my studies, I took an online course
                focusing on front-end development and has mastered HTML, CSS,
                JavaScript and React.js. Throughout the online course, I was
                able to design clock app, weather app, a dictionary and simple
                websites. I also learned Figma and honed my skill on using it
                though designing my own websites (though I prefer wireframes
                more). I would say my work flow is more flexible and I work
                quicker when using wireframes. I have yet to specialise in any
                industry but I imagine my forte will be in helping others in
                designing their portfolio and writing. I am sure that with my
                skills, I will be able to understand your idea and materialise
                it.
              </p>
            </div>
          </div>
        </div>
        <div className="websiteSection section">
          <h2 className="text-center">Websites Collection</h2>
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
      </div>
    </div>
  );
}

export default App;
