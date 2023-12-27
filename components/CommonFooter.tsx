/**
 *
 * Footer
 *
 * @param {String} text - Footer text
 *
 */

export default function CommonFooter() {
  return (
    <>
      <footer>
        <hr className="solid" />
        <h2>Built by Arvind.</h2>
        <div className="social-links">
          <a href="https://github.com/arvjei11" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/arvind-jei" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.hackerrank.com/arvindjei11" target="_blank" rel="noopener noreferrer">
            HackerRank
          </a>
        </div>
      </footer>
      <style jsx>{`
        footer {
          padding-bottom: 2vw;
          margin: auto;
          text-align: center;
        }

        footer h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 200;
          font-size: 0.8873vw;
          line-height: 140%;
          color: #2d3436;
          padding-top: 1vw;
        }

        .social-links {
          display: flex;
          justify-content: center;
          margin-top: 1vw;
        }

        .social-links a {
          margin: 0 1vw;
          font-size: 1.2rem;
          color: #2d3436;
          text-decoration: none;
        }

        .social-links a:hover {
          text-decoration: underline;
        }

        @media screen AND (max-width: 526px) {
          footer {
            width: 100%;
            padding: 0;
            padding-top: 2vh;
          }
          footer h2 {
            font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji";
            font-style: normal;
            font-weight: 200;
            font-size: 2.8873vw;
            line-height: 140%;
            color: #2d3436;
            padding-top: 1vw;
          }
        }
      `}</style>
      <style global jsx>
        {`
          footer .page-links .col a {
            color: var(--title-color);
            flex: 1;
            margin-bottom: 8px;
          }

          footer div.store-links a img {
            height: 38px;
          }
        `}
      </style>
    </>
  );
}
