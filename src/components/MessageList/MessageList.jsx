import React, { useContext, useState } from "react";
import { Spring } from "react-spring/renderprops";

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

  const appear = {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 200 },
    delay: 1000,
  };

  return (
    <div className="message-list">
      <div className="message-heading">
        <h1 className="message-time">{currentTime.toLocaleString()}</h1>
      </div>
      <AnimatedMessages messages={activeMessages} />
      {showActions && (
        <div className="reply-actions">
          {actions.map((action, idx) => (
            <Spring {...appear} key={idx}>
              {(props) => (
                <div style={props}>
                  <ReplyAction
                    key={idx}
                    action={action}
                    toggleContactDrawer={toggleVisible}
                  />
                </div>
              )}
            </Spring>
          ))}
        </div>
      )}
      <ContactDrawer visible={visible} toggleVisible={toggleVisible} />
    </div>
  );
};

export default MessageList;
