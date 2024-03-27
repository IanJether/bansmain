'use client'

import { AllContext } from "@/states/context";
import { faCheckCircle, faCircleExclamation, faTimesCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const notificationStyles = {
  alert: { icon: faCircleExclamation, textColor: "text-red-500" },
  success: { icon: faCheckCircle, textColor: "text-green-500" },
  error: { icon: faTimesCircle, textColor: "text-orange-500" },
};


function Notification({}) {


  const { notificationDisplay, setNotificationDisplay } = useContext(AllContext) 

  const { display, type, message } = notificationDisplay

  const { icon, textColor } = notificationStyles[type] || notificationStyles.alert;

  const handleClose = () => {
    setNotificationDisplay((prevstate)=> ({...prevstate, display:false, type:'' , message: ''}))
  };



  if (display) return (

    <div className='Notification fixed flex gap-[10px] top-[30px] border right-[30px] w-[300px] p-[15px] h-[80px] bg-white rr shadow-md'>
      <div className={`w-[20%] h-full ${textColor} text-[40px] flex items-center justify-center`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="w-[75%] text-[14px] flex items-center">
        <p>{message}</p>
      </div>

      <button onClick={handleClose} className="h-[20px] w-[20px] rr bg-sec text-white text-[9px]">
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>

  )

  return null
  
}

export default Notification;