import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="title">
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
            alt="self-doodled this logo"
            height="50px"
            width="auto"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
