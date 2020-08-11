import React, { useContext } from "react";

import "./MessageList.styles.scss";

import Message from "../Message/Message";
import { MessagesContext } from "../../providers/Messages.provider";
import ReplyAction from "../ReplyAction/ReplyAction";

const MessageList = () => {
  const { messages, toggleLoaded, actions, showActions } = useContext(
    MessagesContext
  );

  return (
    <div className="message-list">
      {messages.map((message, idx) => (
        <Message
          key={message.id}
          message={message}
          toggleMessageLoaded={toggleLoaded}
        />
      ))}
      {showActions && (
        <div className="reply-actions">
          {actions.map((action) => (
            <ReplyAction action={action} key={action.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageList;