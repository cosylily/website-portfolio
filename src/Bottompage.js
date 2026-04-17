import React from "react";
import "./App.css";

export default function Footerbottom() {
  return (
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
        <p>
          Background Image link:{" "}
          <a href="https://pin.it/5UirqeKti">https://pin.it/5UirqeKti</a>
        </p>
        <a href="#toppage">Go to top page </a>
      </div>
    </footer>
  );
}
