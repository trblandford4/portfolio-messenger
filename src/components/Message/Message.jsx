import React, { useState, useEffect } from "react";

import "./Message.styles.scss";

const Message = ({ message: { id, text } }) => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      console.log("setting to false for message ", id);
      setIsTyping(false);
    }, 1500 * id);

    return () => clearTimeout(typingDelay);
  }, []);

  return (
    <div className="chat-bubble" style={{ animationDelay: `${id}s` }}>
      {isTyping ? "..." : text}
    </div>
  );
};

export default Message;
