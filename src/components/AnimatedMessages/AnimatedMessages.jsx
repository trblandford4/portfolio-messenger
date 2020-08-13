import React, { useContext } from "react";
import { Spring } from "react-spring/renderprops";

import Message from "../Message/Message";
import { MessagesContext } from "../../providers/Messages.provider";

const AnimatedMessages = ({ messages }) => {
  const { toggleShowActions } = useContext(MessagesContext);

  const appear = {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  };

  const springLtr = (message) => ({
    from: { transform: "translatex(-50%)" },
    to: { transform: "translatex(0%)" },
    config: { duration: 500 },
    delay: message.delay * 1000,
  });

  const showActionsAfterMessagesLoad = (idx) => {
    if (idx === messages.length - 1) {
      toggleShowActions();
    }
  };

  return messages.map((message, idx) => {
    if (message.sender === "user") {
      return (
        <Spring {...appear} key={idx}>
          {(props) => (
            <div style={props}>
              <Message message={message} />
            </div>
          )}
        </Spring>
      );
    }
    return (
      <Spring
        {...springLtr(message)}
        key={idx}
        onRest={() => showActionsAfterMessagesLoad(idx)}
      >
        {(props) => (
          <div style={props}>
            <Message
              message={message}
              showAvatar={idx === messages.length - 1}
            />
          </div>
        )}
      </Spring>
    );
  });
};

export default AnimatedMessages;
