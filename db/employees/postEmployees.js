

import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Assuming you're using Firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { compressImage } from "../imageCompressor";
import { db, storage } from "../config";


export const handlePostEmployee = (file, name, position, setGlobalLoading, setResetValues, resetValues, triggerNotification) => {

 
    if (file === "none" || name === "" || position === "" ) {

      triggerNotification('alert', 'Please fill all fields')

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
                triggerNotification('success', 'Employee added')
            }).catch((error) => {
                triggerNotification('error', error.code)
            });
        });
    }
};