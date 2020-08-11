import React, { useContext, useState } from "react";

import "./MessageList.styles.scss";

import Message from "../Message/Message";
import { MessagesContext } from "../../providers/Messages.provider";
import ReplyAction from "../ReplyAction/ReplyAction";
import ContactDrawer from "../ContactDrawer/ContactDrawer";

var currentTime = new Date();

const MessageList = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

  const { messages, toggleLoaded, actions, showActions } = useContext(
    MessagesContext
  );

  return (
    <div className="message-list">
      <div className="message-heading">
        <h1 className="message-time">{currentTime.toLocaleString()}</h1>
      </div>
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
            <ReplyAction
              key={action.id}
              action={action}
              toggleContactDrawer={toggleVisible}
            />
          ))}
        </div>
      )}
      <ContactDrawer visible={visible} toggleVisible={toggleVisible} />
    </div>
  );
};

export default MessageList;
