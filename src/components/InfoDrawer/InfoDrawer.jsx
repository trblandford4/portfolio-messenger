import React from "react";
import { Drawer } from "antd";

import DetailsView from "../DetailsView/DetailsView";

const InfoDrawer = ({ visible, toggleVisible }) => {
  return (
    <Drawer
      key={"right"}
      placement="right"
      width="100vw"
      closable={false}
      onClose={toggleVisible}
      visible={visible}
    >
      <DetailsView toggleVisible={toggleVisible} />
    </Drawer>
  );
};

export default InfoDrawer;
