import React, { useEffect, useContext } from "react";

import "./Message.styles.scss";
import MessageLoading from "../MessageLoading/MessageLoading";
import { MessagesContext } from "../../providers/Messages.provider";

const Message = ({ message, toggleMessageLoaded }) => {
  const { text, loaded, sender, type, id, delay } = message;
  const { toggleShowActions } = useContext(MessagesContext);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      id !== 0 && type !== "action"
        ? toggleMessageLoaded(id)
        : console.log("first text");
    }, 1000 * delay + 1000);

    return () => clearTimeout(typingDelay);
  }, []);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      if (id === 4) {
        toggleShowActions();
      }
    }, delay * 1000 + 2000);
    return () => clearTimeout(typingDelay);
  }, []);

  console.log(text, loaded);

  console.log(type === "action");

  return (
    <div
      className={`${sender === "user" ? "sent" : "received"} ${
        type === "action" ? "action-btn" : ""
      } chat-bubble`}
      style={{ animationDelay: `${delay}s` }}
    >
      {loaded ? text : <MessageLoading />}
    </div>
  );
};

export default Message;
