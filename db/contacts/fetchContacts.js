

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config";


const getContacts = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [contactData, setContactData] = useState([]);
  

  useEffect(() => {
    const colRef = collection(db, 'contacts')
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (docsSnap) => {
      let data = [];
      docsSnap.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setContactData(data);
      setIsLoading(false);
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, []);

  return { isLoading, contactData };
};

export default getContacts;