import React, { createContext, useState, useEffect } from "react";

import {
  INITIAL_MESSAGES,
  INITIAL_ACTIONS,
  ABOUT_REPLIES,
} from "./messageData";

export const MessagesContext = createContext({
  messages: [],
  toggleLoaded: () => {},
  actions: [],
  showActions: false,
  toggleShowActions: () => {},
  sendMessage: () => {},
});

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  // eslint-disable-next-line no-unused-vars
  const [actions, setActions] = useState(INITIAL_ACTIONS);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    if (messages[messages.length - 1].sender === "user") {
      setMessages((prevMessages) => [...prevMessages, ...ABOUT_REPLIES]);
      toggleShowActions();
    }
  }, [messages]);

  const toggleLoaded = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, loaded: !message.loaded };
        } else {
          return message;
        }
      })
    );
  };

  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const toggleShowActions = () => {
    setShowActions((prevShowActions) => !prevShowActions);
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        toggleLoaded,
        actions,
        showActions,
        toggleShowActions,
        sendMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
