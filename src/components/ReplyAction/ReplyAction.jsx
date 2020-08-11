import React, { useContext } from "react";
import Message from "../Message/Message";

import "./ReplyAction.styles.scss";
import { MessagesContext } from "../../providers/Messages.provider";

const ReplyAction = ({ action: { type } }) => {
  const message = { text: type, loaded: true, sender: "user", type: "action" };

  const { messages, toggleShowActions, sendMessage } = useContext(
    MessagesContext
  );

  const handleClick = (e) => {
    const message = {
      id: messages.length,
      text: type,
      loaded: false,
      sender: "user",
      type: "msg",
    };
    console.log("add the following message to sent", type);
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
