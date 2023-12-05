import React, { createContext, useContext, useState } from 'react';

interface MyContextData {
  count: number;
  increment: () => void;
  decrement: () => void;
}


const MyContext = createContext<MyContextData | undefined>(undefined);

interface MyProviderProps {
  children: React.ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const contextValue: MyContextData = {
    count,
    increment,
    decrement,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export const useMyContext = (): MyContextData => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
