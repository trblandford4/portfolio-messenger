import React, { createContext, useState } from "react";

export const OverlayContext = createContext({
  visible: false,
  toggleVisible: () => {},
});

const OverlayProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <OverlayContext.Provider
      value={{
        visible,
        toggleVisible,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
