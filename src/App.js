import "./App.css";
import Footerbottom from "./Bottompage.js";

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
          <div className="introduction">Click the button to learn more</div>
        </div>
      </div>
      <Footerbottom />
    </div>
  );
}

export default App;
