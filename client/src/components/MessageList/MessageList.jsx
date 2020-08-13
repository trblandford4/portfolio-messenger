import React, { useContext, useState } from "react";

import "./MessageList.styles.scss";

import { MessagesContext } from "../../providers/Messages.provider";
import ReplyAction from "../ReplyAction/ReplyAction";
import ContactDrawer from "../ContactDrawer/ContactDrawer";
import AnimatedMessages from "../AnimatedMessages/AnimatedMessages";

var currentTime = new Date();

const MessageList = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

  const { activeMessages, actions, showActions } = useContext(MessagesContext);

  return (
    <div className="message-list">
      <div className="message-heading">
        <h1 className="message-time">{currentTime.toLocaleString()}</h1>
      </div>
      <AnimatedMessages messages={activeMessages} />
      {showActions && (
        <div className="reply-actions">
          {actions.map((action, idx) => (
            <ReplyAction
              key={idx}
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
