import React, { useContext } from "react";
import Message from "../Message/Message";

import "./ReplyAction.styles.scss";
import { MessagesContext } from "../../providers/Messages.provider";

const ReplyAction = ({ action: { type } }) => {
  const message = { text: type, loaded: true, sender: "user", type: "action" };

  const { toggleShowActions } = useContext(MessagesContext);

  const handleClick = (e) => {
    console.log("add the following message to sent", type);
    toggleShowActions();
  };
  return (
    <button className="reply-action" onClick={handleClick}>
      <Message message={message} />
    </button>
  );
};

export default ReplyAction;
