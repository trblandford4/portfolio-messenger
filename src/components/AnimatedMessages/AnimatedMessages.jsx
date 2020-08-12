import React, { useContext } from "react";
import { Spring } from "react-spring/renderprops";

import Message from "../Message/Message";
import { MessagesContext } from "../../providers/Messages.provider";

const AnimatedMessages = ({ messages }) => {
  const { toggleShowActions } = useContext(MessagesContext);

  const springLtr = (message) => ({
    from: { transform: "translatex(-50%)" },
    to: { transform: "translatex(0%)" },
    config: { duration: 100 },
    delay: message.delay * 1000,
  });

  const showActionsAfterMessagesLoad = (idx) => {
    if (idx === messages.length - 1) {
      setTimeout(() => toggleShowActions(), 1000);
    }
  };

  return messages.map((message, idx) => (
    <Spring
      {...springLtr(message)}
      key={idx}
      onRest={() => showActionsAfterMessagesLoad(idx)}
    >
      {(props) => (
        <div style={props}>
          <Message message={message} />
        </div>
      )}
    </Spring>
  ));
};

export default AnimatedMessages;
