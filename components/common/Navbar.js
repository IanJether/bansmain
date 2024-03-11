'use client'

import { NavbarList } from "@/data/NavbarList";
import { AllContext } from "@/states/context";
import { faBars, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";



const Navbar = () => {

    const {dashboardPage, setDashboardPage} = useContext(AllContext)
  
    const pathname = usePathname();

    if(pathname.startsWith("/dashboard"))

        return (
            <div>
                
            </div>
        )

    useEffect(()=>{
        if(pathname.startsWith("/dashboard")){
            setDashboardPage(true)
        }else{
            setDashboardPage(false)
        }

    },[])

    const Pathname = usePathname()
    
    if (Pathname === '/login' || Pathname === '/signup' || Pathname.startsWith('/dashboard') == true) {
        return null;
    }


    
    

    return (
        <div className='Navbar'>
            {/* mobile navbar  */}

            <div className="mobilenav lg:hidden z-50 fixed top-[0px] w-[100vw]">

                <div className="bg-gray-700 pad flex items-center justify-center gap-[20px] text-[12px] text-orange-500 h-[30px]">
                    <div className="flex gap-[8px] items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        0712345678
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <FontAwesomeIcon icon={faEnvelope} />
                        info@bansprotection.co.ke
                    </div>

                </div>

                <div className="flex bg-white justify-between items-center pad h-[55px] shadow-md">

                    <div className="font-semibold h-[90%]">
                        <Image className="h-full w-full object-contain" height={400} width={400} src="/images/logo.png" alt="" />
                    </div>
                    <div className="text-[18px]">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                </div>

            </div>

            <div className="desktopnav hidden z-50 lg:flex flex-col fixed top-[0px] w-[100vw] shadow-md min-h-[10vh] h-[100px]">
                <div className="flex justify-between pad bg-gray-700 h-[40%] w-full">
                    <div className=" flex items-center justify-start gap-[20px] text-[12px] text-orange-500 h-full">
                        <div className="flex gap-[8px] items-center">
                            <FontAwesomeIcon icon={faPhone} />
                            <p className="text-white"> 0712345678 </p>
                        </div>
                        <div className="flex gap-[8px] items-center">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className="text-white"> info@bansprotection.co.ke </p>
                        </div>

                    </div>
                    <div className="flex gap-[8px] items-center">
                        <FontAwesomeIcon className="text-orange-500" icon={faUser} />
                       <Link href="/login"> <p className="text-white hover:text-orange-500 hover:underline"> login </p> </Link>
                    </div>
                </div>
                <div className="h-[60%] bg-white pad flex justify-between items-center">
                    <div className="h-[90%]">
                        <Image className="h-full w-full object-contain" height={400} width={400} src="/images/logo.png" alt="" />
                    </div>
                    <div className="flex justify-between w-[50%]">
                        {NavbarList.map((items, index) => {

                            return (
                                <div key={index} className="mappednavbar capitalize font-semibold">
                                    <Link href={items.link}> <p>{items.name}</p> </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <Link href="/contact">  <button className="h-[45px] rr bg-orange-500 text-white text-[15px] px-[22px] font-semibold">Contact Us</button> </Link>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Navbar;