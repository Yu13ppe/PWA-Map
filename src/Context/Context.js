import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <AppContext.Provider value={{ visibility, toggleVisibility }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider};
