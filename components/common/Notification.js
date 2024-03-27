'use client'

import FadeInRight from "@/animation/FadeInRight";
import { AllContext } from "@/states/context";
import { faArrowRight, faCheckCircle, faCircleExclamation, faTimesCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";

const notificationStyles = {
  alert: { icon: faCircleExclamation, textColor: "text-red-500" },
  success: { icon: faCheckCircle, textColor: "text-green-500" },
  error: { icon: faTimesCircle, textColor: "text-orange-500" },
};


function Notification({ }) {


  const { notificationDisplay, setNotificationDisplay } = useContext(AllContext)

  const [animationClass, setAnimationClass] = useState('');
  const [visible, setVisible] = useState(false);

  const { display, type, message } = notificationDisplay

  // const { animation1, showNotification, hideNotification } = FadeInRight()

  const { icon, textColor } = notificationStyles[type] || '';

  const handleClose = () => {

    setAnimationClass('animate__animated animate__faster animate__fadeOutRight');

    setTimeout(() => {
      setNotificationDisplay({ display: false, type: '', message: '' });
    }, 500);
  };


  useEffect(() => {
    if (display) {
     
      setVisible(true);

      setAnimationClass('animate__animated animate__faster animate__fadeInRight');
     
      const timer = setTimeout(() => {
        setAnimationClass('');
      }, 1000); 
      return () => clearTimeout(timer);
    } else if (!display && visible) {

      setAnimationClass('animate__animated animate__faster animate__fadeOutRight');
     
      const timer = setTimeout(() => {
        setVisible(false);
        setAnimationClass('');
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [display]);

  





  if (visible) return (

    <div className={`Notification fixed ${animationClass} flex gap-[10px] top-[30px] border right-[30px] w-[300px] p-[15px] h-[80px] bg-white rr shadow-md`}>
      <div className={`w-[20%] h-full ${textColor} text-[40px] flex items-center justify-center`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="w-[75%] text-[14px] flex items-center">
        <p>{message}</p>
      </div>

      <button onClick={() => handleClose()} className="h-[20px] w-[20px] text-neutral-600 text-[11px]">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>

  )

  return null

}

export default Notification;