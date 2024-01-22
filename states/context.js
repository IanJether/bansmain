'use client'

import { createContext, useContext, useState } from 'react';

export const AllContext = createContext();


export function AllContextProvider({ children }) {

  const [dashboardPage, setDashboardPage] = useState(false);
 

  return (
    <AllContext.Provider value={{ dashboardPage, setDashboardPage }}>
      {children}
    </AllContext.Provider>
  );
}