'use client'

import dynamic from 'next/dynamic';
import { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

export const AllContext = createContext();


export function AllContextProvider({ children }) {

  const [dashboardPage, setDashboardPage] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [resetValues, setResetValues] = useState(false);
  const [notificationDisplay,setNotificationDisplay] = useState({display: false, type: '', message: ''})

  const triggerNotification = (type,message) => {

    setNotificationDisplay({display:true,type,message})

    setTimeout(()=>{
        setNotificationDisplay((prevstate)=> ({...prevstate, display:false, type:'' , message: ''}))
    },3000)
  }




  return (
    <AllContext.Provider value={{ dashboardPage, setDashboardPage, globalLoading, setGlobalLoading, resetValues, setResetValues, notificationDisplay, setNotificationDisplay, triggerNotification }}>
      
      {children}
    
    </AllContext.Provider>
  );
}