import React from "react";
import { Drawer, message } from "antd";
import axios from "axios";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "../ContactForm/ContactForm";
import useWindowDimensions from "../useWindowDimensions/useWindowDimensions";

const ContactDrawer = ({ visible, toggleVisible }) => {
  const { width } = useWindowDimensions();

  const onFinish = (values) => {
    axios({
      url: "contact",
      method: "post",
      data: values,
    })
      .then((response) => {
        message.success(
          "Thanks for your message! I'll get back to you ASAP 😊"
        );
        toggleVisible();
      })
      .catch((error) => {
        console.log("Contact error: ", error);
        message.error("Uh oh, something went wrong. 😭");
      });
  };

  return (
    <Drawer
      title="Get in touch"
      placement="bottom"
      height={width < 768 ? "75vh" : "50vh"}
      closeIcon={
        <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: "20px" }} />
      }
      onClose={toggleVisible}
      visible={visible}
      key={"bottom"}
    >
      <ContactForm onFinish={onFinish} />
    </Drawer>
  );
};

export default ContactDrawer;
