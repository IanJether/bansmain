
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Assuming you're using Firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { compressImage } from "../imageCompressor";
import { db, storage } from "../config";


export const handlePostReview = (file, name, company, position, review, status, setGlobalLoading, setResetValues, resetValues, triggerNotification) => {

 
    if (file === "none" || name === "" || company === "" || position === "" || review === "") {

      triggerNotification('alert', 'Please fill all fields')

    } else {
        
        setGlobalLoading(true)

        const fileName = name + '-' + company

        const colRef = collection(db, 'reviews')

        const imageRef = ref(storage, "reviews/" + fileName);

        compressImage(file).then((compressedFile) => {
            uploadBytes(imageRef, compressedFile).then(() => {
                return getDownloadURL(imageRef);
            }).then((url) => {
                return addDoc(colRef, {
                    imageURL: url,
                    name: name,
                    company: company,
                    position: position,
                    review: review,
                    createdAt: serverTimestamp(),
                    status: status
                });
            }).then(() => {
                setGlobalLoading(false)
                setResetValues(!resetValues)
                triggerNotification('success', 'Review added')
            }).catch((error) => {
                triggerNotification('error', error.code)
            });
        });
    }
};
