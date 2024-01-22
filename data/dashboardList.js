
import { auth } from "@/db/config"
import { faDesktop, faDollar, faEnvelopeOpen, faHome, faInbox, faPieChart, faPlus, faPrint, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { signOut } from "firebase/auth"

const nth = () =>{

}

const logOut = () => {
    signOut(auth)
        .then(() => {
            alert('You have signed out successfully')
        }
        )
    window.location.reload()
}


export const dashboardList = [
    {
        name:"dashboard",
        link: "/dashboard",
        function: nth,
        icon: faDesktop
    },
    {
        name:"Orders",
        link: "/dashboard/orders",
        function: nth,
        icon: faDollar
    },
    {
        name:"work",
        link: "/dashboard/work",
        function: nth,
        icon: faPieChart
    },
    {
        name:"prints",
        link: "/dashboard/prints",
        function: nth,
        icon: faPrint
    },
    {
        name:"home",
        link: "/dashboard/home",
        function: nth,
        icon: faHome
    },
    {
        name:"messages",
        link: "/dashboard/messages",
        function: nth,
        icon: faEnvelopeOpen
    },
    {
        name:"Logout",
        link: "/",
        function: logOut,
        icon: faSignOut
    },
]