import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileDownload,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import avatar from "../../assets/rayb.png";

import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      <img src={avatar} alt="Ray Blandford" className="avatar" />
      <div className="info">
        <h1 className="title">Ray Blandford</h1>
        <h2 className="description">Front End Engineer</h2>
      </div>
      <div className="actions">
        <a href="mailto:trblandford4@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
        <FontAwesomeIcon icon={faFileDownload} className="icon" />
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
      </div>
    </div>
  );
};

export default Header;
