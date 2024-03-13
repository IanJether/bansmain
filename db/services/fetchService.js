


import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config";


const getServices = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [servicesData, setServicesData] = useState([]);
  

  useEffect(() => {
    const colRef = collection(db, 'services')
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (docsSnap) => {
      let data = [];
      docsSnap.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setIsLoading(false);
      setServicesData(data);
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, []);

  return { isLoading, servicesData };
};

export default getServices;