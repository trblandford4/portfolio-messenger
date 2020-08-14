import React, { useContext } from "react";

import "./App.scss";

import { OverlayContext } from "./providers/Overlay.provider";
import MessagesProvider from "./providers/Messages.provider";
import MessageList from "./components/MessageList/MessageList";
import Header from "./components/Header/Header";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const { visible: overlayVisible } = useContext(OverlayContext);

  return (
    <div className="App">
      {overlayVisible && <Overlay />}
      <Header />
      <div className="content">
        <MessagesProvider>
          <MessageList />
        </MessagesProvider>
      </div>
    </div>
  );
}

export default App;
