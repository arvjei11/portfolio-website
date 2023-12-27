import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

/**
 *
 * A simple accordion component used at FAQ page, created by using Material UI package.
 *
 * @param {Array} questions - Array of questions, data comes from strapi. questionTitle is the title, questionDescription is the description.
 *
 */

export default function SimpleAccordion() {
  const [questions] = useState({
    questions: [
      {
        questionTitle: "MS in Computer Science at University of Texas at Dallas, Aug 2023 - Present",
        questionDescription:
          'In my first semester of the MSCS program, I completed foundational graduate-level coursework in algorithms, machine learning, and databases. Learned advanced data structures, algorithm design techniques, and analysis. Studied supervised and unsupervised machine learning models including regression, classification, clustering, and neural networks. Gained hands-on SQL and NoSQL database experience through course projects. Currently pursuing the Intelligent Systems concentration with a focus on deep learning and its applications. ',
      },
      {
        questionTitle: "Presented and Published 'Natural Language Processing Based Screening for Applicant Tracking Systems' at the ICRTDA 2023, July 2023",
        questionDescription:
          "Presented research paper titled 'Natural Language Processing Based Screening for Applicant Tracking Systems' at the International Conference on Recent Trends in Data Science and Analytics (ICRTDA) in July 2023. Proposed an automated resume screening system using BERT language model and cosine similarity to match candidate skills with job requirements. Demonstrated 90% accuracy in extracting key details from resumes. Published full paper in conference proceedings. Received positive feedback from peers on novel approach combining NLP and ML for resume analysis. Good opportunity to present academic research and network with data science experts.",
      },
      {
        questionTitle: "Software Engineer Intern, Momentum India, Jun 2022-Sep 2022",
        questionDescription:
          "As a dynamic Software Engineer Intern at Momentum India from June to September 2022, I spearheaded transformative initiatives, achieving a remarkable 20% reduction in manual workloads by implementing an innovative low-code auditing tool. My pivotal role extended to the architecture and execution of new modules within the flagship web application, where I optimized relational table designs and crafted highly efficient REST APIs. Collaborating seamlessly with cross-functional teams, I elevated user experience by meticulously reviewing requirements and establishing strategic objectives for advancement.",
      },
      {
        questionTitle: "Data Scientist Intern, Assetplus Consulting, Feb 2022 - March 2022",
        questionDescription:
          "As a Data Scientist Intern at Company X from February to March 2022, I seamlessly navigated the end-to-end data analytics lifecycle. From wrangling and cleansing to processing and analyzing a significant volume of both structured and unstructured client data, I laid the foundation for impactful modeling. Skillfully applying decision trees and K-nearest neighbors algorithms, I engineered predictive machine learning models to proficiently categorize textual and digital inputs. Elevating the models further, I honed precision through meticulous parameter tuning, achieving a noteworthy 5% enhancement in accuracy and overall performance.",
      },
      {
        questionTitle: "Bachelor of Technology in Computer Science and Business Systems at SRM Institute of Science and Technology, Jun 2019 - May 2023",
        questionDescription:
          "Completed integrated degree combining computer science and business administration. Relevant coursework included data structures, algorithms, database systems, operating systems, object-oriented programming, software engineering, financial accounting, marketing, and business strategy. Graduated with a 3.98/4.0 GPA, receiving consistent academic honors. Developed strong technical skills as well as business acumen through interdisciplinary curriculum. Academic projects involved building full-stack web applications, mobile apps, and enterprise software systems.",
      },
     
    ],
  });

  return (
    <>
      <div className="accordion-style">
        {questions.questions.map((i) => {
          return (
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#EAFFD0",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2d3436" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#2d3436",
                    fontSize: "16px",
                    lineHeight: "122%",
                    fontFamily: "Visby",
                  }}
                >
                  {i.questionDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <style jsx>
        {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
      </style>
    </>
  );
}
