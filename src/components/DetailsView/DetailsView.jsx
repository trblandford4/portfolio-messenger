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
            "https://docs.google.com/uc?export=download&id=1Eo6Bg3KoxwGtFUmjpnFyj2qEhui-eWWA"
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
        <p>
          I enjoy building web applications - front to back. blah blah blah blah
          blah
        </p>
        <p>
          Shortly after graduating from Virginia Tech, I became a PM then SDE at
          Microsoft. I left to cofound a startup building blah blah blah
        </p>
        <p>Here are the technologies I've used most recently:</p>
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
