import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore"; 
import { db } from "../config";


const getSingleBlog = (itemId) => { 

    const [isLoading, setIsLoading] = useState(true);
    const [singleBlogData, setSingleBlogData] = useState(null); // Single blog item, thus null as default
  
    useEffect(() => {
      if (!itemId) {
        setIsLoading(false);
        return;
      }
  
      const docRef = doc(db, 'blogs', itemId);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setSingleBlogData({ ...docSnap.data(), id: docSnap.id });
          setIsLoading(false);
        } else {
          console.log("No such document!");
          setIsLoading(false);
        }
      });
  
      return () => unsubscribe(); 
    }, [itemId]); 
  
    return { isLoading, singleBlogData };
  };
  
  export default getSingleBlog;