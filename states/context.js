'use client'

import { createContext, useContext, useState } from 'react';

export const AllContext = createContext();


export function AllContextProvider({ children }) {

  const [dashboardPage, setDashboardPage] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [resetValues, setResetValues] = useState(false);
 

  return (
    <AllContext.Provider value={{ dashboardPage, setDashboardPage, globalLoading, setGlobalLoading, resetValues, setResetValues }}>
      {children}
    </AllContext.Provider>
  );
}