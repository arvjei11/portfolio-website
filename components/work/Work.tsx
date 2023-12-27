import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

/**
 *
 * Work page only for desktop. In this page i used gsap, scrolltrigger and it is not really optimal to use gsap and react. It is 5 different pages with static texts.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of component.
 * @param {String} itemTitle - Title of the item.
 * @param {String} itemSubtitle - Subtitle of the item.
 * @param {String} itemLink - A link for the item.
 *
 */

export default function WorkDesktop() {
  const [texts] = useState({
    title: `<strong>Work,</strong> my previous projects.`,
    subtitle: "Here are the projects that i have worked on before.",
  });
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + 1080 * panels.current.length,
      },
    });
  }, []);

  return (
    <>
      <>
        <div className="container" ref={panelsContainer}>
          <div
            className="description panel"
            ref={(e) => createPanelsRefs(e, 0)}
          >
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: texts.title }}></h1>
              <p>{texts.subtitle}</p>
              <div className="scroll-down">
                Scroll down<div className="arrow"></div>
              </div>
            </div>
          </div>
          <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
            <div className="content">
              <h1
                style={{
                  width: "clamp(32vw, 32vw, 991.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Talent Scout - NLP Powered Recruiting</strong> Web App`,
                }}
              ></h1>
              <p
                style={{
                  width: "clamp(32vw, 32vw, 890.43px)",
                  textAlign: "left",
                }}
              >
                Led NLP implementation for intelligent resume screening as an undergraduate research project. Architected core extraction and scoring algorithms using techniques like cosine similarity to rank candidates. 
              </p>
              <div className="box">
                <a href="https://github.com/arvjei11/NLP-Resume-Screening-Base-Model">
                  {" "}
                  <button>
                    <span>Base Model</span>
                  </button>
                </a>
              </div>
            </div>
            <img src="/work/danceflavors_app.png" alt="DanceFlavors App" />
          </section>
          <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
            <div className="content">
              <h1
                style={{
                  width: "clamp(32vw, 32vw, 991.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Meta Facebook Clone</strong> Website`,
                }}
              ></h1>
              <p
                style={{
                  width: "clamp(32vw, 32vw, 890.43px)",
                  textAlign: "left",
                }}
              >
Led development on a full-fledged social media web app over 4 months as an academic project. Wove together a React-powered frontend with smooth UI flows for sharing posts, pics, and connecting with friends. Built out the backend using Node.js and MongoDB to make everything tick, from user profiles to messaging APIs. Spent days perfecting APIs—optimizing and slicing response times for snappy performance. Rigorously tested across browsers and devices to polish the user experience—no glitches allowed              </p>
              <div className="box">
                <a href="https://github.com/arvjei11">
                  <button
                    style={{ backgroundColor: "#3f4399", color: "#FFFFFF" }}
                  >
                    <span>Source Code</span>
                  </button>
                </a>
              </div>
            </div>
            <img style={{}}src="/work/metavest.png" alt="FB Clone App" />
          </section>
          <section className="panel green" ref={(e) => createPanelsRefs(e, 3)}>
            <div className="content">
              <h1
                style={{
                  width: "clamp(32vw, 32vw, 991.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>COVID-19 Case Tracker</strong> Web App`,
                }}
              ></h1>
              <p
                style={{
                  width: "clamp(32vw, 32vw, 890.43px)",
                  textAlign: "left",
                }}
              >
Crafted an intuitive Java/Spring Boot web dashboard to visualize COVID-19 spread. 
Retrieved live CSV data and rendered clean visualizations with Thymeleaf. 
Focused on consumable data presentation and smooth UX, earning praise for public health education. 
Demonstrated Java web development skills through robust backend and sleek frontend.
              </p>
              <div className="box">
                <a href="https://github.com/arvjei11/covid-case-tracker">
                  <button
                    style={{ backgroundColor: "#2f3640", color: "#44bd32" }}
                  >
                    <span>Source Code</span>
                  </button>
                </a>
              </div>
            </div>
            <img style={{}} src="/work/daiday.png" alt="COVID19 APP" />
          </section>
          <section className="panel purple" ref={(e) => createPanelsRefs(e, 4)}>
            <div className="content">
              <h1
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>LeetCode Solutions</strong> Data Structures and Algorithms`,
                }}
              ></h1>
              <p
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
              >
This repository presents Java solutions to LeetCode algorithm challenges, highlighting skills in data structure implementation, algorithm analysis, and object-oriented programming. Solutions aim to balance correctness, efficiency, and maintainable design.
              </p>
              <div className="box">
                <a href="https://github.com/arvjei11/leetcode-solutions">
                  {" "}
                  <button>
                    <span>Repo Link</span>
                  </button>
                </a>
              </div>
            </div>
            <div
              style={{ paddingLeft: "50px", alignItems: "space-around" }}
              className="content"
            >
              <h1
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>HackerRank</strong> Skill Certifications`,
                }}
              ></h1>
              <p
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
              >
                My HackerRank profile demonstrates proficiency in core computer science skills including Java, Python, C++, and SQL. I have achieved 5-star ratings by completing challenges that assess algorithmic thinking, data structure implementation, object-oriented programming, database query authoring, and other foundational competencies required for software engineering roles.
              </p>
              <div className="box">
                <a href="https://www.hackerrank.com/arvindjei11">
                  <button>
                    <span>HackerRank</span>
                  </button>
                </a>
              </div>
            </div>
          </section>
          <section className="panel gray" ref={(e) => createPanelsRefs(e, 5)}>
            <div className="links">
              <h1
                style={{ color: "#FCE38A" }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>More,</strong> checkout more at links below`,
                }}
              ></h1>
              <div className="box2">
                <a href="https://www.linkedin.com/in/arvind-jei/">
                  <button>
                    <span>LinkedIn </span>
                  </button>
                </a>
                <a href="https://github.com/arvjei11  ">
                  <button>
                    <span>My Github</span>
                  </button>
                </a>
                <a href="https://arvjei11.github.io/Resume/">
                  <button>
                    <span>Resume</span>
                  </button>
                </a>  
              </div>
            </div>
          </section>
        </div>
      </>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          width: 600%;
          height: 100vh;
          display: flex;
          flex-wrap: nowrap;
        }

        .panel.align-top {
          align-items: flex-start;
        }

        .panel h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
        }

        .panel p {
          color: #2d3436;
          line-height: 128%;
        }
        .panel.description {
          padding-bottom: 60px;
        }

        .panel li {
          color: black;
          font-weight: 400;
          text-align: left;
          font-size: 0.8em;
          line-height: 1.5em;
          margin: 0.3em 0 1em 0;
        }
        .panel li strong {
          color: white;
          font-weight: 400;
        }
        .panel p code,
        .panel li code {
          background-color: rgba(255, 255, 255, 0.15);
          padding: 2px 4px;
          border-radius: 5px;
        }
        .panel li {
          margin: 0;
        }
        .gray {
          background-color: #F38181;
        }

        .gray p {
          color: #2d3436;
        }

        .orange {
          background-color: #A1EEBD;
        }

        .red {
          background-color: #7BD3EA;
        }

        .purple {
          background-color: #F6D6D6;
        }
        .green {
          background-color: #28a92b;
          background-image: radial-gradient(
              circle at 46% 40%,
              rgba(228, 228, 228, 0.06) 0%,
              rgba(228, 228, 228, 0.06) 13%,
              transparent 13%,
              transparent 100%
            ),
            radial-gradient(
              circle at 11% 41%,
              rgba(198, 198, 198, 0.06) 0%,
              rgba(198, 198, 198, 0.06) 19%,
              transparent 19%,
              transparent 100%
            ),
            radial-gradient(
              circle at 52% 23%,
              rgba(14, 14, 14, 0.06) 0%,
              rgba(14, 14, 14, 0.06) 69%,
              transparent 69%,
              transparent 100%
            ),
            radial-gradient(
              circle at 13% 85%,
              rgba(148, 148, 148, 0.06) 0%,
              rgba(148, 148, 148, 0.06) 44%,
              transparent 44%,
              transparent 100%
            ),
            radial-gradient(
              circle at 57% 74%,
              rgba(232, 232, 232, 0.06) 0%,
              rgba(232, 232, 232, 0.06) 21%,
              transparent 21%,
              transparent 100%
            ),
            radial-gradient(
              circle at 59% 54%,
              rgba(39, 39, 39, 0.06) 0%,
              rgba(39, 39, 39, 0.06) 49%,
              transparent 49%,
              transparent 100%
            ),
            radial-gradient(
              circle at 98% 38%,
              rgba(157, 157, 157, 0.06) 0%,
              rgba(157, 157, 157, 0.06) 24%,
              transparent 24%,
              transparent 100%
            ),
            radial-gradient(
              circle at 8% 6%,
              rgba(60, 60, 60, 0.06) 0%,
              rgba(60, 60, 60, 0.06) 12%,
              transparent 12%,
              transparent 100%
            ),
            linear-gradient(90deg, #28a92b, #10a614);
        }

        html,
        body {
          margin: 0;
          height: 100%;
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
          font-family: "Signika Negative", sans-serif, Arial;
        }

        .panel {
          padding: 12.235vw 12.103vw 10.978vw;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          padding: 10px;
        }

        .panel content {
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .panel links {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .panel .links .action {
          padding: 1.19047vw 1.32275vw 1.32275vw 1.32275vw;
          box-sizing: border-box;
          border-radius: 0.92592vw;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 50%;
          background: #3d474a;
          margin: 0 auto;
        }

        .box {
          padding-top: 30px;
          width: clamp(32vw, 32vw, 890.43px);
          display: flex;
          flex-direction: row;
        }

        .box button {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 0.8em;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
          display: inline-block;
          border-radius: 4px;
          border: none;
          width: 10vw;
          height: 3vw;
          text-align: center;
          transition: all 0.5s;
          cursor: pointer;
          margin-right: 15px;
        }

        .box button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        .box button span:after {
          content: "►";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }

        .box button:hover span {
          padding-right: 25px;
        }

        .box button:hover span:after {
          opacity: 1;
          right: 0;
        }

        .box2 {
          padding-top: 30px;
        }

        .box2 button {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 0.8em;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
          border-radius: 4px;
          border: none;
          width: 10vw;
          height: 3vw;
          text-align: center;
          transition: all 0.5s;
          cursor: pointer;
          margin-right: 15px;
          background-color: #FCE38A;
        }

        .box2 button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        .box2 button span:after {
          content: "►";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }

        .box2 button:hover span {
          padding-right: 25px;
        }

        .box2 button:hover span:after {
          opacity: 1;
          right: 0;
        }

        .panel img {
          object-fit: cover;
          width: 35%;
        }

        body {
          overflow-x: hidden;
          overflow-y: scroll;
        }

        h1,
        h2,
        p,
        li {
          max-width: 800px;
        }

        /* HEADER */
        header {
          position: fixed;
          top: 0px;
          left: 0px;
          padding: 6px 10px 10px 10px;
          border-bottom-right-radius: 26px;
          z-index: 100;
          background-color: rgba(0, 0, 0, 0.5);
        }

        /* HEADINGS */
        .header-section {
          padding: 0 15px;
          text-align: center;
          margin: 40vh auto 50vh;
        }

        /* SCROLL DOWN */
        .scroll-down {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translate(-50%, 0);
          color: black;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 16px;
          overflow: visible;
        }
        .scroll-down .arrow {
          position: relative;
          top: -4px;
          margin: 0 auto;
          width: 20px;
          height: 20px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
          background-size: contain;
        }
      `}</style>
    </>
  );
}
