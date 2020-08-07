import React from "react";

import MESSAGES from "./messageData";
import Message from "../Message/Message";

const MessageList = () => {
  return (
    <div>
      {MESSAGES.map((message, idx) => (
        <Message key={idx} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
