import React, { useContext } from "react";
import Message from "../Message/Message";

import "./ReplyAction.styles.scss";
import { MessagesContext } from "../../providers/Messages.provider";

const ReplyAction = ({ action, toggleContactDrawer }) => {
  const message = {
    text: action,
    loaded: true,
    sender: "user",
    type: "action",
  };

  const { sendMessage } = useContext(MessagesContext);

  const handleClick = () => {
    if (action === "contact") {
      toggleContactDrawer();
      return;
    }
    sendMessage(action);
  };

  return (
    <button className="reply-action" onClick={handleClick}>
      <Message message={message} />
    </button>
  );
};

export default ReplyAction;
