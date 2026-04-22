import React from "react";
import "./website.css";

export default function Descp(props) {
  if (props.show === "firstwebsite") {
    return (
      <div className="firstsection">
        <h2 className="p-2 m-2">Syaf's life update website</h2>
        <video
          src="lifeupdate.mov"
          width="50%"
          height="auto"
          autoPlay
          loop
          muted="true"
          playsinline
          className="m-2"
        ></video>
        <div className="descriptions section ">
          <h3>About website:</h3>
          <p>
            The website is designed and coded to provide my friends with my
            current life update. When arranging the online meeting, we were
            required to create a slide presentation but I thought it was too
            simple, so I have decided to code the page. This has rebuilt my
            thinking towards websites as it does not have to be really complex
            and have many information.
          </p>
        </div>
        <div className="codinglanguage section">
          <h3>Languages used:</h3>
          <p>HTML and CSS</p>
        </div>
        <div className="designmethod section">
          <h3>Web design method:</h3> <p>Paper and Pen (Wireframe)</p>
        </div>
        <div className="sources section">
          <h3>Material sources:</h3>
          <p>
            Pinterest for background images. XiaoHongShu for colour palette. And
            some are my own photos.
          </p>
        </div>
        <div className="section challenges">
          <h3>Challenges faced:</h3>
          <ul>
            <li>
              <h4>Lack of details when designing</h4>
              <p>
                I am used to using wireframe and as someone who is not very
                artistic, I face challenges when designing a website. Before
                having a specific design, I rushed into coding the page as I had
                time limitations and lack of design ideas. The design eventually
                came to me as I code but I had to make many changes along the
                way.
              </p>
            </li>
            <li>
              <h4>Colour matching</h4>
              <p>
                Even though I had a colour palette to refer to, I had a hard
                time setting the colour for the words and the backgrounds. To
                ensuring clarity and visibility. However, it was not a big
                problem as I had people helping me with determining if the
                colour matching was okay {">_<"}
              </p>
            </li>
            <li>
              <h4>Flow of webpage</h4>
              <p>
                As it had to look like a presentation while being a webpage
                itself, it was quite difficult for me to design the flow of the
                website. Fortunately, I quickly figure out how the flow should
                work which saved quite lots of time.
              </p>
            </li>
          </ul>
        </div>
        <a href="https://github.com/cosylily/lily-update">
          Go to GitHub for the code
        </a>
      </div>
    );
  }
  if (props.show === "secondwebsite") {
    return <div>Hi</div>;
  }
}
