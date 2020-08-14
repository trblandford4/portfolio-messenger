import React, { useEffect, useContext } from "react";

import "./Message.styles.scss";
import MessageLoading from "../MessageLoading/MessageLoading";
import { MessagesContext } from "../../providers/Messages.provider";
import Avatar from "../Avatar/Avatar";
import ImageMessageWithLightbox from "../ImageMessageWithLightbox/ImageMessageWithLightbox";

const Message = ({ message, showAvatar }) => {
  const { text, loaded, sender, type, id, delay, paths } = message;
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

  if (!loaded) {
    return (
      <div className="message" style={{ animationDelay: `${delay}s` }}>
        <div className={`received no-avatar chat-bubble`}>
          <MessageLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="message" style={{ animationDelay: `${delay}s` }}>
      {showAvatar && <Avatar size={20} />}
      {type === "image" ? (
        <ImageMessageWithLightbox images={paths} />
      ) : (
        <div
          className={`${sender === "user" ? "sent" : "received"} ${
            type === "action" ? "action-btn" : ""
          } ${showAvatar ? "" : "no-avatar"} chat-bubble`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Message;
