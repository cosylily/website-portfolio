import React from "react";
import { useState } from "react";
import "./App.css";
import "./website.css";
import Descp from "./WebsiteDescription.js";

export default function Displaywebsites() {
  let [ready, setReady] = useState(false);
  let [description, setDescription] = useState();

  if (ready) {
    return (
      <div>
        <button onClick={displayNormal} className="backbutton">
          Back
        </button>
        <Descp show={description} />
      </div>
    );
  } else {
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
            As we live far away from each other, my friend has organised a
            meeting for us to gather online and present our life updates. I
            thought to myself that creating a presentation would be cliche, so I
            created a website instead {">.<"}
          </p>
          <div className="webbuttons">
            {" "}
            <button className="learnmorebutton" onClick={displayOne}>
              Learn more
            </button>
            <a
              href="https://syafsupdate.netlify.app/"
              className="weblink"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
        <div className="fanpage">
          <h3>Tsurune Fanpage:</h3>
          <video
            src="
            /tsurunefanpage-1.mov"
            width="50%"
            height="auto"
            autoPlay
            loop
            muted="true"
            playsinline
          ></video>
          <p>
            After practicing Kyudo, I wanted to know more about it and as I was
            into anime at the time, I stumbled upon this anime called Tsurune.
            Tsurune is an amazing sports anime that talks about Kyudo. Ofthen
            when I rewatch the anime, I get new ideas on how to improve my
            shooting stance. I then decided to develop a website for this anime.
          </p>
          <div className="webbuttons">
            {" "}
            <button className="learnmorebutton" onClick={displayTwo}>
              Learn more
            </button>
            <a
              href="https://tsurunefanpage.netlify.app/"
              className="weblink"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
        <div className="lifeupdate">
          <h3>Birthday Gift to a friend:</h3>
          <video
            src="/newspaperbirthdaytheme.mov"
            width="50%"
            height="auto"
            autoPlay
            loop
            muted="true"
            playsinline
          ></video>
          <p>
            Upon thinking what to give my friend for her birthday, I decided to
            code a website for her. We had lesser time to meet and there is
            nothing better than giving a digital gift. While using my specialty,
            I let her know that she is special to me in this website. This is
            not the exact website I coded for my friend as I would like to
            protect her privacy. I replaced her information and pictures to
            something else.
          </p>
          <div className="webbuttons">
            {" "}
            <button className="learnmorebutton" onClick={displayThree}>
              Learn more
            </button>
            <a
              href="http://birthdaycatnews.netlify.app/"
              className="weblink"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    );
  }
  function displayOne() {
    setReady(true);
    setDescription("firstwebsite");
  }
  function displayTwo() {
    setReady(true);
    setDescription("secondwebsite");
  }
  function displayNormal() {
    setReady(false);
  }
  function displayThree() {
    setReady(true);
    setDescription("thirdwebsite");
  }
}
