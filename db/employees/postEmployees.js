

import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Assuming you're using Firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { compressImage } from "../imageCompressor";
import { db, storage } from "../config";


export const handlePostEmployee = (file, name, position, setGlobalLoading, setResetValues, resetValues) => {

 
    if (file === "none" || name === "" || position === "" ) {

        alert("Kindly fill all necessary details");// change this to a toast message or something of the sort

    } else {
        
        setGlobalLoading(true)

        const fileName = name + '-' + position

        const colRef = collection(db, 'employees')

        const imageRef = ref(storage, "employees/" + fileName);

        compressImage(file).then((compressedFile) => {
            uploadBytes(imageRef, compressedFile).then(() => {
                return getDownloadURL(imageRef);
            }).then((url) => {
                return addDoc(colRef, {
                    imageURL: url,
                    name: name,
                    position: position,
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