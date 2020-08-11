import React from "react";
import { Drawer } from "antd";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "../ContactForm/ContactForm";

const ContactDrawer = ({ visible, toggleVisible }) => {
  return (
    <Drawer
      title="Get in touch"
      placement="bottom"
      height="50vh"
      closeIcon={
        <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: "20px" }} />
      }
      onClose={toggleVisible}
      visible={visible}
      key={"bottom"}
    >
      <ContactForm />
    </Drawer>
  );
};

export default ContactDrawer;
