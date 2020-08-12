import React, { createContext, useState, useEffect } from "react";

import { MESSAGES, ACTIONS } from "./messageData";

export const MessagesContext = createContext({
  messages: [],
  toggleLoaded: () => {},
  actions: [],
  showActions: false,
  toggleShowActions: () => {},
  sendMessage: () => {},
});

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState(MESSAGES.intro);
  // eslint-disable-next-line no-unused-vars
  const [actions, setActions] = useState(ACTIONS);
  const [showActions, setShowActions] = useState(false);

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
