


import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config";


const getBlogs = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [blogsData, setBlogsData] = useState([]);
  

  useEffect(() => {
    const colRef = collection(db, 'blogs')
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (docsSnap) => {
      let data = [];
      docsSnap.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setIsLoading(false);
      setBlogsData(data);
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, []);

  return { isLoading, blogsData };
};

export default getBlogs;