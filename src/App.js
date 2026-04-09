import "./App.css";

function App() {
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
          <button>About</button>
          <button>Education</button>
          <button>Certificate</button>
          <button>List of Websites</button>
          <button>Contact</button>
        </div>
        <div className="emptyspace">
          <div className="introduction">Click any button to learn more</div>
        </div>
      </div>
      <footer>
        <div className="footertitle">
          <h2>Syafiqah's Portfolio</h2>
          <img
            src="logoforportfolio.jpg"
            alt="doodled by myself. Thinking to have a sticker pack for this"
            height="80px"
            width="auto"
          />
        </div>
        <div className="footercontent">
          <p>
            Thank you for visiting this website. If there is any chance that my
            skill is useful, contact me through email.
          </p>
          <p>This page is coded by Syafiqah, using React.js.</p>
          <a href="#toppage">Go to top page </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
