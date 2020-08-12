import React, { createContext, useState } from "react";

import { MESSAGES, ACTIONS } from "./messageData";

export const MessagesContext = createContext({
  activeMessages: [],
  toggleLoaded: () => {},
  actions: [],
  showActions: false,
  toggleShowActions: () => {},
  sendMessage: () => {},
});

const MessagesProvider = ({ children }) => {
  const [activeMessages, setActiveMessages] = useState(MESSAGES.intro);
  // eslint-disable-next-line no-unused-vars
  const [actions, setActions] = useState(ACTIONS);
  const [showActions, setShowActions] = useState(false);

  const toggleLoaded = (messageId) => {
    setActiveMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, loaded: !message.loaded };
        } else {
          return message;
        }
      })
    );
  };

  const sendMessage = (action) => {
    toggleShowActions();
    setActions((prevActions) =>
      prevActions.filter((currAction) => currAction !== action)
    );
    const sentMessage = {
      id: activeMessages[activeMessages.length - 1].id++,
      text: action,
      loaded: false,
      sender: "user",
      type: "msg",
    };
    setActiveMessages((prevMessages) => [
      ...prevMessages,
      sentMessage,
      ...MESSAGES[action],
    ]);
  };

  const toggleShowActions = () => {
    setShowActions((prevShowActions) => !prevShowActions);
  };

  return (
    <MessagesContext.Provider
      value={{
        activeMessages,
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
