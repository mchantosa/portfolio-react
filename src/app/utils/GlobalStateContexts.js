import React, { createContext, useState, useContext} from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hasMobileToggle, setHasMobileToggle] = useState(false);
  
  return (
    <GlobalStateContext.Provider value={{ 
      openMenu, 
      setOpenMenu, 
      hasMobileToggle, 
      setHasMobileToggle, 
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
