

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";



export const handleUpdateBlog = (title, author, description, blog, setGlobalLoading, setResetValues, resetValues, router, id, triggerNotification) => {

    if (title === "" || author === "" || description === "" ) {

        triggerNotification('alert', 'Please fill all fields')
    } else {

        setGlobalLoading(true)

        const docRef = doc(db, "blogs", id);

        updateDoc(docRef, {
            title:title,
            author:author,
            description: description,
            blog: blog,
        }).then(() => {
            setGlobalLoading(false)
            setResetValues(!resetValues)
            router.back()
            triggerNotification('success', 'Blog Updated Successfully')

        })



    }

}