
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";



export const handleUpdateService = (title, description, text, setGlobalLoading, setResetValues, resetValues, router, id) => {

    if (title === "" || description === "" ) {

        alert('')
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
            router.back()

        })



    }

}