import React from "react";
import { Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InfoDrawer = ({ visible, toggleVisible }) => {
  return (
    <Drawer
      key={"right"}
      placement="right"
      width="100vw"
      onClose={toggleVisible}
      visible={visible}
      closeIcon={<FontAwesomeIcon icon={faArrowLeft} />}
    >
      <p>Content</p>
    </Drawer>
  );
};

export default InfoDrawer;
