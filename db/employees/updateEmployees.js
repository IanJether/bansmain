import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";



export const handleUpdateEmployee = (name, position, setGlobalLoading, setResetValues, resetValues, router, id) => {

    if (name === "" || position === "") {

        alert('')
    } else {

        setGlobalLoading(true)

        const docRef = doc(db, "employees", id);

        updateDoc(docRef, {
            name: name,
            position: position
        }).then(() => {
            setGlobalLoading(false)
            setResetValues(!resetValues)
            router.back()

        })



    }

}