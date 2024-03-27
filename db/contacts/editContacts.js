import { doc, updateDoc } from "firebase/firestore"
import { db } from "../config"



export const handleUpdateCompanyContacts = (phone, email, locationName, locationLink, setGlobalLoading, id, setOverlay) => {

    if (phone == '' || email == '' || locationName == '' || locationLink == '') {

        alert('')
    } else {
        setGlobalLoading(true)

        const docRef = doc(db, 'contacts', id)

        updateDoc(docRef, {
            email: email,
            phone: phone,
            locationLink: locationLink,
            locationName: locationName
        }).then(() => {
            setGlobalLoading(false)
            setOverlay(false)
        })
    }
}


export const handleUpdateCompanySocials = (facebookLink, facebookName, instagramName, instagramLink, linkedinName, linkedinLink, twitterName, twitterLink, setGlobalLoading, id, setOverlay) => {

    if (facebookLink == '' || facebookName == '' || instagramName == '' || instagramLink == '' || linkedinName == '' || linkedinLink == '' || twitterName == '' || twitterLink == '') {
        alert('')
    } else {
        setGlobalLoading(true)

        const docRef = doc(db, 'contacts', id)

        updateDoc(docRef, {
            facebookLink: facebookLink,
            facebookName: facebookName,
            instagramLink: instagramLink,
            instagramName: instagramName,
            linkedinLink: linkedinLink,
            linkedinName: linkedinName,
            twitterLink: twitterLink,
            twitterName: twitterName,
        }).then(() => {
            setGlobalLoading(false)
            setOverlay(false)
        })
    }
}