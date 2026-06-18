import React, { useState } from "react";
import Descp from "./WebsiteDescription";

export default function Menu(props) {
  let [website, setwebsite] = useState();
  return (
    <div className="firstsection">
      <div className="leftsection">
        <div className="vidone individualvideos mb-5">
          <button onClick={displayUpdate}>
            <video
              src="lifeupdate.mov"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted="true"
              playsinline
              className="m-2"
            ></video>
          </button>
        </div>
        <div className="mb-5 vidtwo">
          <button onClick={displayTsurune}>
            <img
              src="/tsurunepic.png"
              alt="Main page of Tsurune Page"
              width="100%"
            />
          </button>
        </div>
        <div className="vidthree">
          <button onClick={displayNews}>
            <img
              src="/newspic.png"
              alt="Main page of Birthcat Newspaper"
              width="100%"
            />
          </button>
        </div>
      </div>

      <Descp show={props.name} orthis={website} />
    </div>
  );
  function displayUpdate() {
    setwebsite("update");
  }
  function displayTsurune() {
    setwebsite("tsurune");
  }
  function displayNews() {
    setwebsite("news");
  }
}
