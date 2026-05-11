import React from "react";
import "./App.css";
import "./button.css";
import About from "./About.js";
import Education from "./Education.js";
import Showcerts from "./Showcertificates.js";
import Websites from "./Websites.js";
import Contacts from "./Displaycontacts.js";

export default function DisplayContent(props) {
  if (props.name === "about") {
    return <About />;
  }
  if (props.name === "education") {
    return <Education />;
  }
  if (props.name === "certificates") {
    return <Showcerts />;
  }
  if (props.name === "websites") {
    return <Websites />;
  }
  if (props.name === "contacts") {
    return <Contacts />;
  } else {
    return (
      <div>
        <div className="greetings">
          <h1 className="prompt p-3 m-5">
            Hi there 🙃 Welcome to my portfolio!
          </h1>
          <img
            src="/mainpic.jpeg"
            alt="Syafiqah graduating with her favourite coffee during her degree!"
            width="auto"
            height="500px"
            className="syaf"
          />
          <div className="m-5">
            <h2 className="p-2">
              I am Syafiqah Dayana, an aspiring website designer and junior
              front-end developer!
            </h2>
            <h2 className="p-2">Based in Kuala Lumpur, Malaysia 🇲🇾</h2>
          </div>
        </div>
        <div className="mainpagecontent">
          <div className="p-2 m-5 ">
            <h2 className="">About me:</h2>
            <div className="aboutsectioncontent">
              <video
                src="/kyudo.MOV"
                autoPlay
                loop
                muted="true"
                playsinline
                width="auto"
                height="500px"
              ></video>
              <div className="aboutsectioncontenttwo">
                <p>
                  Hello there! I am a recent graduate from University of
                  Manchester under the degree of Politics, Philosophy and
                  Economics. During my degree, I had the chance to learn about
                  website design and became very interested in it! I just love
                  how I am able to express my creativity in a way that is not
                  very conventional. My current obsession is Traditional
                  Japanese Archery {"<3"}! It helps me in keeping my creativity
                  juices flowing instead of keeping couped up in a closed space
                  and sitting down all day. As a Malaysian, I am proud to say
                  that I speak three languages fluently which are Malay, English
                  and Mandarin. I enjoy learning new languages too. Now I am
                  able to speak another 3 languages at a conversational level.
                  Let's get to know each other!
                </p>
                <div className="file"></div>
                <button>Learn more here</button>
              </div>
            </div>
          </div>
          <div className="p-2 m-5 ">
            <h2 className="">Education and Qualifications</h2>
            <div className="aboutsectioncontent">
              <div className="aboutsectioncontenttwo">
                <p>
                  My degree is BA Politics, Philosophy and Economics and I am
                  heavily interested in Philosophy & Economics! If you are
                  interested, let's talk about them! I also had the initiative
                  to take an online course for my website developing skills.
                  Some coding languages that I am skilled in are HTML, CSS and
                  Javascript.
                </p>
                <div className="edusectionbuttons">
                  <button>My Education</button>
                  <button>My Qualifications</button>
                </div>
              </div>

              <img
                src="/cert1.png"
                alt="certificate of basic html"
                width="50%"
                height="auto"
              />
            </div>
          </div>
          <div className="p-2 m-5 ">
            <h2>Coded Websites</h2>
            <div className="groupvid">
              <video
                src="/lifeupdate.mov"
                autoPlay
                loop
                muted="true"
                playsinline
                width="30%"
                height="auto"
              ></video>
              <video
                src="/tsurunefanpage-1.mov"
                autoPlay
                loop
                muted="true"
                playsinline
                width="30%"
                height="auto"
              ></video>
              <video
                src="/newpaperbirthdaytheme.mov"
                autoPlay
                loop
                muted="true"
                playsinline
                width="30%"
                height="auto"
              ></video>
            </div>
            <p>
              In this portfolio, I have included some of my own projects. The
              projects that I chose to present here are all my latest work and
              they are my own initiative. Learn more to understand about my
              style and work!
            </p>
            <button>All websites here</button>
          </div>
        </div>
      </div>
    );
  }
}
