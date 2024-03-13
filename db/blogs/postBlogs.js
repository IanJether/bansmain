


import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Assuming you're using Firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { compressImage } from "../imageCompressor";
import { db, storage } from "../config";


export const handlePostBlogs = (file, title, author, description, blog, setGlobalLoading, setResetValues, resetValues) => {

 
    if (file === "none" || title === "" || author === "" || description === "" ) {

        alert("Kindly fill all necessary details");// change this to a toast message or something of the sort

    } else {
        
        setGlobalLoading(true)

        const fileName = title 

        const colRef = collection(db, 'blogs')

        const imageRef = ref(storage, "blogs/" + fileName);

        compressImage(file).then((compressedFile) => {
            uploadBytes(imageRef, compressedFile).then(() => {
                return getDownloadURL(imageRef);
            }).then((url) => {
                return addDoc(colRef, {
                    imageURL: url,
                    title:title,
                    author:author,
                    description: description,
                    blog: blog,
                    createdAt: serverTimestamp(),
                });
            }).then(() => {
                setGlobalLoading(false)
                setResetValues(!resetValues)
            }).catch((error) => {
                console.log(error);
            });
        });
    }
};