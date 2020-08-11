import React, { createContext, useState, useEffect } from "react";

import { INITIAL_MESSAGES, INITIAL_ACTIONS } from "./messageData";

export const MessagesContext = createContext({
  messages: [],
  toggleLoaded: () => {},
  actions: [],
  showActions: false,
  toggleShowActions: () => {},
});

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  // eslint-disable-next-line no-unused-vars
  const [actions, setActions] = useState(INITIAL_ACTIONS);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    console.log("messages updated to: ", messages);
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
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
