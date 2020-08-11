import React from "react";
import { Badge } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileDownload,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.styles.scss";
import Avatar from "../Avatar/Avatar";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      <Badge
        dot
        color="green"
        offset={[-8, 44]}
        style={{ height: "10px", width: "10px" }}
      >
        <Avatar size={50} />
      </Badge>
      <div className="info">
        <h1 className="title">Ray Blandford</h1>
        <h2 className="description">Active on VS Code</h2>
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
