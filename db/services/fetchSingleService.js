

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore"; 
import { db } from "../config";


const getSingleService = (itemId) => { 

    const [isLoading, setIsLoading] = useState(true);
    const [singleServiceData, setSingleServiceData] = useState(null); // Single blog item, thus null as default
  
    useEffect(() => {
      if (!itemId) {
        setIsLoading(false);
        return;
      }
  
      const docRef = doc(db, 'services', itemId);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setSingleServiceData({ ...docSnap.data(), id: docSnap.id });
          setIsLoading(false);
        } else {
          console.log("No such document!");
          setIsLoading(false);
        }
      });
  
      return () => unsubscribe(); 
    }, [itemId]); 
  
    return { isLoading, singleServiceData };
  };
  
  export default getSingleService;