import React, { useState } from "react";

/**
 *
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 * 
 *
 */
function ProjectsColumn() {
  const [texts] = useState({
    projects: [
      {
        backgroundColor: `#0a9396`,
        type: ` Web App`,
        title: `<strong>Talent Scout - NLP Powered Recruiting</strong>`,
        subtitle:
          "                Led NLP implementation for intelligent resume screening as an undergraduate research project. Architected core extraction and scoring algorithms using techniques like cosine similarity to rank candidates.",
        techs: "TensorFlow, NLP, Python",
        links: {
          github: "https://github.com/arvjei11/NLP-Resume-Screening-Base-Model",
        },
      },
      {
        backgroundColor: `#0a9396`,
        type: `Website`,
        title: `<strong>Meta Facebook Clone</strong>`,
        subtitle:
          "Led development on a full-fledged social media web app over 4 months as an academic project. Wove together a React-powered frontend with smooth UI flows for sharing posts, pics, and connecting with friends. Built out the backend using Node.js and MongoDB to make everything tick, from user profiles to messaging APIs. Spent days perfecting APIs—optimizing and slicing response times for snappy performance. Rigorously tested across browsers and devices to polish the user experience—no glitches allowed",
        techs: "Reactjs Nodejs MongoDB Expressjs",
        links: {
          github: "",
          website: "https://github.com/arvjei11/react-social-app",
        },
      },
      {
        backgroundColor: `#CCFAED`,
        type: `Web App`,
        title: `<strong>COVID-19 Case Tracker</strong>`,
        subtitle:
          "Crafted an intuitive Java/Spring Boot web dashboard to visualize COVID-19 spread. Retrieved live CSV data and rendered clean visualizations with Thymeleaf.Focused on consumable data presentation and smooth UX, earning praise for public health education. Demonstrated Java web development skills through robust backend and sleek frontend.",
        techs: "Java Spring Boot Thymeleaf Template",
        links: {
          github: "https://github.com/arvjei11/covid-case-tracker",
        },
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `Repository`,
        title: `<strong>Leetcode Solutions</strong>`,
        subtitle:
          "This repository presents Java solutions to LeetCode algorithm challenges, highlighting skills in data structure implementation, algorithm analysis, and object-oriented programming. Solutions aim to balance correctness, efficiency, and maintainable design.",
        techs: "Java Python Data Structures and Algorithms",
        links: {
          github: "https://github.com/arvjei11/leetcode-solutions",
        },
      },
    ],
  });

  /// Returns the items from the projects array.
  return (
    <>
      <div className="column">
        {texts.projects.map((item, i) => {
          return (
            <div
              className="item"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: item.type,
                }}
              ></h1>
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.subtitle,
                }}
              ></p>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.techs,
                }}
              ></span>
              <div className="row-of-logos">
                {item.links.github != "" ? (
                  <a href="">
                    <img src="/logos/github-mark.png" alt="" />
                  </a>
                ) : null}
                {item.links.website != "" ? (
                  <a href="">
                    <img src="/logos/website.png" alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }
        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
        }
        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }
        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default ProjectsColumn;
