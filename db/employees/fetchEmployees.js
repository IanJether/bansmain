

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config";


const getEmployees = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState([]);
  

  useEffect(() => {
    const colRef = collection(db, 'employees')
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (docsSnap) => {
      let data = [];
      docsSnap.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setIsLoading(false);
      setEmployeesData(data);
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, []);

  return { isLoading, employeesData };
};

export default getEmployees;