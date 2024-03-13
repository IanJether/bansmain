'use client'

import { AllContext } from "@/states/context";
import NavDashComp from "./Navdash";
import LoaderComp from "@/components/Loader";
import { useContext } from "react";



function MainDash({children}) {

    const { globalLoading } = useContext(AllContext);

    return (
        <div className='MainDash lg:flex'>

            <div className="w-[260px] shrink-0">
                <NavDashComp />
            </div>

            <div className="w-[100%] bg-gray-100 p-[40px]">
                {children}
            </div>

            {globalLoading && <LoaderComp />}

        </div>
    );
}

export default MainDash;