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
    return (
      <div className="secondsection">
        <h2 className="p-2 m-2">Tsurune Fan Page</h2>
        <video
          src="/tsurunefanpage-1.mov"
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
            This webiste is coded for my own practice and my way of showing my
            love to the anime. To make it look like a fanpage and a proper
            website, I get inspiration from websites that alright published
            information about the anime. The inspirations help me to build
            sections in the website and add some sections of my own to call it
            my own website. I did not update one of the section in the website
            because the project dragged too long and I did not have enough time
            to update the section as it needed my own information. The website
            that I display here is not the original version.
          </p>
        </div>
        <div className="codinglanguage section">
          <h3>Languages used:</h3>
          <p>HTML, CSS and JavaScript</p>
        </div>
        <div className="designmethod section">
          <h3>Web design method:</h3> <p>Paper and Pen (Wireframe) and Figma</p>
        </div>
        <div className="sources section">
          <h3>Material sources:</h3>
          <p>
            Pinterest for images. XiaoHongShu for colour palette. Information on
            the anime from Tsurune Wiki and Wikipedia.
          </p>
        </div>
        <div className="section challenges">
          <h3>Challenges faced:</h3>
          <ul>
            <li>
              <h4>Lack of certain section when designing using Figma</h4>
              <p>
                As someone who is yet to get used to Figma, I completed the
                design for the homepage but not for all sections. I did try to
                design some other sections for visualisation but did not
                complete them. But I got to say, though the process of designing
                usig Figma takes a long time, the visuals really help in finish
                developing the page quickly.
              </p>
            </li>
            <li>
              <h4>Colour matching</h4>
              <p>
                Like I mentioned above, I only used Figma to design some of the
                sections. If you refer to the website, you will notice that I
                used different colour palettes for some different sections in
                the website. When I changed to different colour palette, it was
                quite difficult as I had to match the colours again. However,
                this time, I had a lot of fun as the colours were pretty {"<3"}.
              </p>
            </li>
            <li>
              <h4>Size of the website</h4>
              <p>
                I had developed a handful of websites but they were all simple
                ones. This is the first time I added a lot of section and coded
                earnestly. It took me lots of time to finish this project as I
                had to focus on other tasks on hand as well. I procastinated
                along the way as well which led to one of the page in the
                website not being updated.
              </p>
            </li>
          </ul>
        </div>
        <a href="https://github.com/cosylily/tsurune-lily.git">
          Go to GitHub for the code
        </a>
      </div>
    );
  }
  if (props.show === "thirdwebsite") {
    return (
      <div className="thirdsection">
        <h2 className="p-2 m-2">Newspaper themed birthday website</h2>
        <video
          src="/newpaperbirthdaytheme.mov"
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
            While I was thinking hard on gifts for my friend's birthday, it came
            to me that building a website to celebrate her birthday would not be
            a bad idea. (Of course, this website is not the only gift!) It was
            not easy to consider the sections and theme for this website. Then
            as I was browsing for ideas, it came to me that nothing is better
            than telling how I appreciate her and include our memories in the
            form of newspaper. That was how this website was coded. I included
            her favourite online game as well, sudoku!
          </p>
        </div>
        <div className="codinglanguage section">
          <h3>Languages used:</h3>
          <p>HTML and light CSS</p>
        </div>
        <div className="designmethod section">
          <h3>Web design method:</h3> <p>Paper and Pen (Wireframe)</p>
        </div>
        <div className="sources section">
          <h3>Material sources:</h3>
          <p>
            XiaoHongShu for website structure, my own photo app for pictures.
          </p>
        </div>
        <div className="section challenges">
          <h3>Challenges faced:</h3>
          <ul>
            <li>
              <h4>Website structure</h4>
              <p>
                It was challenging to code the website to fit a newspaper
                structure as I lack the time to think about the contents in
                detail. The length of the description next to the picture had to
                be controlled to fit the length of the picture.
              </p>
            </li>
            <li>
              <h4>Responsiveness</h4>
              <p>
                Considering my friend will not have the time to open the website
                on a large screen, I had to consider how to make it look good in
                both screens. It took some time and I had to take some contents
                out to make the site look both in both screens.
              </p>
            </li>
          </ul>
        </div>
        <a href="https://github.com/cosylily/newspaperbirthdaytheme.git">
          Go to GitHub for the code
        </a>
      </div>
    );
  }
}
