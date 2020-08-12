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

  const { messages, toggleShowActions, sendMessage } = useContext(
    MessagesContext
  );

  const handleClick = (e) => {
    if (action === "contact") {
      toggleContactDrawer();
      return;
    }
    const message = {
      id: messages.length,
      text: action,
      loaded: false,
      sender: "user",
      type: "msg",
    };
    toggleShowActions();
    sendMessage(message);
  };
  return (
    <button className="reply-action" onClick={handleClick}>
      <Message message={message} />
    </button>
  );
};

export default ReplyAction;
