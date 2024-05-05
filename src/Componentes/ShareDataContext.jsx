import { createContext, useState } from 'react';

export const ShareDataContext = createContext();

export const ShareDataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <ShareDataContext.Provider value={{ data, setData }}>
      {children}
    </ShareDataContext.Provider>
  );
};
