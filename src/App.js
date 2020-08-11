import React from "react";

import "./App.scss";

import MessagesProvider from "./providers/Messages.provider";
import MessageList from "./components/MessageList/MessageList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MessagesProvider>
        <MessageList />
      </MessagesProvider>
    </div>
  );
}

export default App;
