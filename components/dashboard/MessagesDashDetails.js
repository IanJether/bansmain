'use client'
import { useRouter } from "next/navigation";
import MainDash from "./common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";



function MessagesDashDetails() {

    const router = useRouter();

    return (
        <MainDash>
            <div className='MessagesDashDetails relative'>
                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center h-[60px]">
                    <h2 className="text-[24px] capitalize font-semibold text-primary">From Mark Munene</h2>


                    <p className="text-neutral-700">Thursday 27th february 2024</p>
                </div>

                <div className="w-full p-[30px] bg-white rr mt-[30px] shadow-sm">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quibusdam doloribus in eos! Libero vel et laborum quia, sequi adipisci velit impedit provident suscipit, quis natus optio deleniti, eveniet sint!</p>
                </div>

                <div className="w-[300px] bg-white p-[30px] mt-[50px] rr shadow-sm">
                    <div className="flex gap-[10px] items-center">
                        <span className="text-sec"><FontAwesomeIcon icon={faPhone}/></span>
                        <p className="text-primary text-[15px] hover:underline">0712345678</p>
                    </div>
                    <div className="flex gap-[10px] items-center mt-[10px]">
                        <span className="text-sec"><FontAwesomeIcon icon={faEnvelope}/></span>
                        <p className="text-primary text-[15px] hover:underline">mark@gmail.com</p>
                    </div>

                </div>

            </div>
        </MainDash>
    );
}

export default MessagesDashDetails;