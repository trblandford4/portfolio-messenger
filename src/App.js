import React from "react";

import "./App.scss";

import MessagesProvider from "./providers/Messages.provider";
import MessageList from "./components/MessageList/MessageList";

function App() {
  return (
    <div className="App">
      <MessagesProvider>
        <MessageList />
      </MessagesProvider>
    </div>
  );
}

export default App;
