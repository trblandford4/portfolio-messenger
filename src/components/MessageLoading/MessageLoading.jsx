import React from "react";

import "./MessageLoading.styles.scss";

const MessageLoading = () => {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
};

export default MessageLoading;
