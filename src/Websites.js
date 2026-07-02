import React from "react";
import { useState } from "react";
import "./App.css";
import "./website.css";
import Descp from "./WebsiteDescription.js";

export default function Displaywebsites() {
  let [ready, setReady] = useState(false);
  let [description, setDescription] = useState();
  let [activeOne, setActiveOne] = useState(false);
  let [activeTwo, setActiveTwo] = useState(false);
  let [activeThree, setActiveThree] = useState(false);

  if (ready) {
    return (
      <div className="firstsection">
        <div className="leftsection">
          <div className="vidone">
            <button onClick={displayOne} className="videobutton">
              <div className={activeOne ? "displayvideo" : "displaynone"}>
                <video
                  src="lifeupdate.mov"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted="true"
                  playsinline
                ></video>
              </div>
              <div className={activeOne ? "displaynone" : "displayimg"}>
                <img
                  src="/updatepic.png"
                  alt="Look, this is my life update website!"
                  width="100%"
                />
              </div>
            </button>
          </div>
          <div className="vidtwo">
            <button onClick={displayTwo} className="videobutton">
              <div className={activeTwo ? "displayvideo" : "displaynone"}>
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
              <div className={activeTwo ? "displaynone" : "displayimg"}>
                <img
                  src="/tsurunepic.png"
                  alt="Main page of Tsurune Page"
                  width="100%"
                />
              </div>
            </button>
          </div>
          <div className="vidthree">
            <button onClick={displayThree} className="videobutton">
              <div className={activeThree ? "displayvideo" : "displaynone"}>
                <video
                  src="/newpaperbirthdaytheme.mov"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted="true"
                  playsinline
                  className="mb-2"
                ></video>
              </div>
              <div className={activeThree ? "displaynone" : "displayimg"}>
                <img
                  src="/newspic.png"
                  alt="Main page of Birthcat Newspaper"
                  width="100%"
                />
              </div>
            </button>
          </div>
        </div>

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
    setActiveOne(true);
    setActiveTwo(false);
    setActiveThree(false);
  }
  function displayTwo() {
    setReady(true);
    setDescription("secondwebsite");
    setActiveOne(false);
    setActiveTwo(true);
    setActiveThree(false);
  }
  function displayThree() {
    setReady(true);
    setDescription("thirdwebsite");
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(true);
  }
}
