'use client'

import FadeInRight from '@/animation/FadeInRight';
import { createContext, useState } from 'react';

export const AllContext = createContext();


export function AllContextProvider({ children }) {

  const [dashboardPage, setDashboardPage] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [resetValues, setResetValues] = useState(false);
  const [notificationDisplay, setNotificationDisplay] = useState({ display: false, type: '', message: '' })

  const { showNotification, hideNotification } = FadeInRight()


  const triggerNotification = (type, message) => {

    // showNotification()

    setNotificationDisplay({ display: true, type, message })

    setTimeout(() => {

      // hideNotification()

      setNotificationDisplay({ display: false, type: '', message: '' });

    }, 3000)
  }




  return (
    <AllContext.Provider value={{ dashboardPage, setDashboardPage, globalLoading, setGlobalLoading, resetValues, setResetValues, notificationDisplay, setNotificationDisplay, triggerNotification }}>

      {children}

    </AllContext.Provider>
  );
}