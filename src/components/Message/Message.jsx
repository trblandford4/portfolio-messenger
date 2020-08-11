import React, { useEffect, useContext } from "react";

import "./Message.styles.scss";
import MessageLoading from "../MessageLoading/MessageLoading";
import { MessagesContext } from "../../providers/Messages.provider";
import Avatar from "../Avatar/Avatar";

const Message = ({ message, toggleMessageLoaded }) => {
  const { text, loaded, sender, type, id, delay } = message;
  const { toggleShowActions } = useContext(MessagesContext);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      if (id !== 0 && type !== "action") {
        toggleMessageLoaded(id);
      }
    }, 1000 * delay + 1000);

    return () => clearTimeout(typingDelay);
  }, [id, delay, type]);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      if (id === 4) {
        toggleShowActions();
      }
    }, delay * 1000 + 2000);
    return () => clearTimeout(typingDelay);
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
