import React, { useState } from "react";
import { Badge, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileDownload,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.styles.scss";
import Avatar from "../Avatar/Avatar";
import InfoDrawer from "../InfoDrawer/InfoDrawer";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

  return (
    <div className="header">
      <Tooltip
        placement="bottomLeft"
        title="I'm just here to make the UI look better 💁‍♂️"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      </Tooltip>
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
        <Tooltip placement="bottom" title="Email Me">
          <a h href="mailto:hello@rayblandford.com" aria-label="Email Me">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </Tooltip>
        <Tooltip placement="bottom" title="Download Resume">
          <a
            href={
              "https://docs.google.com/uc?export=download&id=1TSxuIVuXQwwOo5Xw6Hn8aONuofWIckIb"
            }
            download="Ray Blandford Resume"
            aria-label="Download Resume"
          >
            <FontAwesomeIcon icon={faFileDownload} className="icon" />
          </a>
        </Tooltip>
        <Tooltip placement="bottom" title="More Info">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="icon"
            onClick={toggleVisible}
          />
        </Tooltip>
      </div>
      <InfoDrawer visible={visible} toggleVisible={toggleVisible} />
    </div>
  );
};

export default Header;
