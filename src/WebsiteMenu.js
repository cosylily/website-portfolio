import React from "react";
import Descp from "./WebsiteDescription";

export default function Menu(props) {
  return (
    <div className="firstsection">
      <div className="leftsection">
        <div className="vidone individualvideos mb-5">
          <button>
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
          <button>
            <img
              src="/tsurunepic.png"
              alt="Main page of Tsurune Page"
              width="100%"
            />
          </button>
        </div>
        <div className="vidthree">
          <button>
            {" "}
            <img
              src="/newspic.png"
              alt="Main page of Birthcat Newspaper"
              width="100%"
            />
          </button>
        </div>
      </div>

      <Descp show={props.show} />
    </div>
  );
}
