import React from "react";
import "./App.css";
import "./website.css";

export default function displaywebsites() {
  return (
    <div>
      <h2>Websites</h2>
      <p>Here are three websites that I coded recently:</p>
      <div className="lifeupdate">
        <h3>Sharing life update with friends:</h3>
        <video
          src="/lifeupdate.mov"
          width="50%"
          height="auto"
          autoPlay
          loop
          muted="true"
          playsinline
        ></video>
        <p>
          As we live far away from each other, my friend has organised a meeting
          for us to gather online and present our life updates. I thought to
          myself that creating a presentation would be cliche, so I created a
          website instead {">.<"}
        </p>
        <div className="webbuttons">
          {" "}
          <button className="learnmorebutton">Learn more</button>
          <a href="https://syafsupdate.netlify.app/" className="weblink">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
