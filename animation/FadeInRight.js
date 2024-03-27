'use client'

import { useState } from "react"

function FadeInRight() {


    const [animation1, setAnimation1] = useState('')

    const showNotification = () => {
        setAnimation1('animate__animated animate__faster animate__fadeInRight');
        // const timeoutId = setTimeout(() => setAnimation1(''), 3000);
     
        // return () => clearTimeout(timeoutId);
    };

    const hideNotification = () => {
        setAnimation1('animate__animated animate__faster animate__fadeOutRight');
   
        // const timeoutId = setTimeout(() => setAnimation1(''), 700);
        // return () => clearTimeout(timeoutId);
    };



    return { animation1, showNotification, hideNotification }
}

export default FadeInRight;

