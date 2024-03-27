
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";



export const handleUpdateService = (title, description, text, setGlobalLoading, setResetValues, resetValues, router, id, triggerNotification) => {

    if (title === "" || description === "" || text == '' ) {

        triggerNotification('alert', 'Please fill all fields')
    } else {

        setGlobalLoading(true)

        const docRef = doc(db, "services", id);

        updateDoc(docRef, {
            title:title,
            description: description,
            text:text
        }).then(() => {
            setGlobalLoading(false)
            setResetValues(!resetValues)
            triggerNotification('success', 'Service Updated')
            router.back()

        })



    }

}