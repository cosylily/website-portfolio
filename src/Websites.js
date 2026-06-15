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
        <div className="rowone">
          <button className="videobutton update" onClick={displayOne}>
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
          <div className="emptyspace"></div>
          <div className="emptyspace"></div>
        </div>
        <div className="rowtwo">
          <div className="emptyspace"></div>
          <button className="videobutton tsurune" onClick={displayTwo}>
            <div className="individualvideos vidtwo">
              <video
                src="/tsurunefanpage-1.mov"
                width="100%"
                height="auto"
                autoPlay
                loop
                muted="true"
                playsinline
              ></video>
            </div>
          </button>
          <div className="emptyspace"></div>
        </div>
        <div className="rowthree">
          <div className="emptyspace"></div> <div className="emptyspace"></div>
          <button className="videobutton birthday" onClick={displayThree}>
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
