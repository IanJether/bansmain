

import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Assuming you're using Firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { compressImage } from "../imageCompressor";
import { db, storage } from "../config";


export const handlePostServices = (file, title, description, text, setGlobalLoading, setResetValues, resetValues, triggerNotification) => {

 
    if (file === "none" || title === "" || description === "" || text === "" ) {

        triggerNotification('alert', 'Please fill all fields')
    } else {
        
        setGlobalLoading(true)

        const fileName = title 

        const colRef = collection(db, 'services')

        const imageRef = ref(storage, "services/" + fileName);

        compressImage(file).then((compressedFile) => {
            uploadBytes(imageRef, compressedFile).then(() => {
                return getDownloadURL(imageRef);
            }).then((url) => {
                return addDoc(colRef, {
                    imageURL: url,
                    title:title,
                    description: description,
                    text: text,
                    createdAt: serverTimestamp(),
                });
            }).then(() => {
                setGlobalLoading(false)
                setResetValues(!resetValues)
                triggerNotification('success','Service added successfully')
            }).catch((error) => {
                triggerNotification('error', error.code)
            });
        });
    }
};