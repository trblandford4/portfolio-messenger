import React from "react";
import { message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsisV,
  faFileDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import "./DetailsView.styles.scss";

import Avatar from "../Avatar/Avatar";

const DetailsView = ({ toggleVisible }) => {
  return (
    <div className="details-view">
      <div className="details-header">
        <button onClick={toggleVisible}>
          <FontAwesomeIcon icon={faArrowLeft} className="header-icon" />
        </button>
        <button onClick={() => message.success("gotcha 😜")}>
          <FontAwesomeIcon icon={faEllipsisV} className="header-icon" />
        </button>
      </div>
      <div className="avatar-and-name">
        <Avatar className="avatar" size={150} />
        <h1 className="name">Ray Blandford</h1>
      </div>
      <div className="social-icon-group">
        <a
          href="https://www.linkedin.com/in/rayblandford/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        </a>

        <a
          href="https://github.com/trblandford4"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FontAwesomeIcon icon={faGithubAlt} className="social-icon" />
        </a>

        <a
          href="mailto:hello@rayblandford.com"
          aria-label="Email Me"
          className="link"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>

        <a
          href={
            "https://drive.google.com/file/d/1rbtpSBY3c7FBH_jBqHehxOqaloKPLQo2/view?usp=sharing"
          }
          download="Ray Blandford Resume"
          aria-label="Download Resume"
          className="link"
        >
          <FontAwesomeIcon icon={faFileDownload} className="icon" />
        </a>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <p>Hello! I'm Ray, a software engineer based in Washington, DC.</p>
        <p>I enjoy learning about, building for, and playing on the Web.</p>
        <p>
          Shortly after I graduated from Virginia Tech, I made my way to the
          rainy city to work as a PM at Microsoft. I helped lead the vision on a
          few internal programs for about a year, and then transferred to become
          a Software Engineer where I helped take the product from early stages
          to{" "}
          <a
            href="https://cloudblogs.microsoft.com/dynamics365/bdm/2019/10/02/announcing-microsoft-dynamics-365-product-insights-now-in-preview/"
            alt="Announcing Microsoft Dynamics 365 Product Insights"
          >
            public preview!
          </a>{" "}
          Most recently, I've been the technical co-founder of a startup focused
          on using Natural Language Processing to help qualitative researchers.
          Between these experiences, I've honed my ability to create and ship
          software that solves real problems for people.
        </p>
        <p>
          I'm accepting new projects, so please reach out if you'd like to work
          together!
        </p>
        <h1>Here's what I can do for you:</h1>
        <ul>
          <li>Full Stack Application Development</li>
          <li>Responsive Web Design</li>
          <li>Web Performance & Accessibility Auditing</li>
          <li>Machine Learning, AI, and Data Science</li>
          <li>
            & More. Send me your ask and we'll come up with a preliminary
            solution design.
          </li>
        </ul>
        <h1>These are the technologies I use frequently:</h1>
        <ul>
          <li>React / Redux</li>
          <li>JavaScript / TypeScript</li>
          <li>HTML & (S)CSS</li>
          <li>Node / Express</li>
          <li>MongoDB / PostgreSQL</li>
          <li>Apollo / GraphQL</li>
          <li>AWS / Azure</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsView;
