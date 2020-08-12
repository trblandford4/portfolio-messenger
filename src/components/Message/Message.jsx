import React, { useEffect, useContext } from "react";

import "./Message.styles.scss";
import MessageLoading from "../MessageLoading/MessageLoading";
import { MessagesContext } from "../../providers/Messages.provider";
import Avatar from "../Avatar/Avatar";

const Message = ({ message }) => {
  const { text, loaded, sender, type, id, delay } = message;
  const { toggleLoaded } = useContext(MessagesContext);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      if (id !== 0 && type !== "action") {
        toggleLoaded(id);
      }
    }, 1000 * delay + 1000);

    return () => clearTimeout(typingDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="message" style={{ animationDelay: `${delay}s` }}>
      {sender !== "user" && <Avatar size={20} />}
      <div
        className={`${sender === "user" ? "sent" : "received"} ${
          type === "action" ? "action-btn" : ""
        } chat-bubble`}
      >
        {loaded ? text : <MessageLoading />}
      </div>
    </div>
  );
};

export default Message;
