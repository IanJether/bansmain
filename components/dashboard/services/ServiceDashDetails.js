'use client'
import { useParams, useRouter } from "next/navigation";
import MainDash from "../common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import getSingleService from "@/db/services/fetchSingleService";
import Image from "next/image";
import ConfirmationBox from "@/components/common/ConfirmBox";
import { useContext, useState } from "react";
import { AllContext } from "@/states/context";
import { db } from "@/db/config";
import { deleteDoc, doc } from "firebase/firestore";





function ServiceDashDetails() {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const { setGlobalLoading, triggerNotification } = useContext(AllContext);

    const router = useRouter();

    const params = useParams();

    const { isLoading, singleServiceData } = getSingleService(params.servicesDashTitle);

    console.log(singleServiceData)

    const address = "/dashboard/services/" + params.servicesDashTitle + "/edit"

    const handleCancel = () => {
        setShowConfirmation(false)
    }

    const exitClick = () => {

        setGlobalLoading(true)
        setShowConfirmation(false)

        deleteDoc(doc(db, 'services' , params.servicesDashTitle )).then(()=>{
            setGlobalLoading(false)
            triggerNotification('success', 'Service deleted')
            router.push('/dashboard/services')
        }).catch((error)=>{
            triggerNotification('error', error)
            setGlobalLoading(false)
        })
       
    }


    return (
        <MainDash>

            {isLoading ?
                <div className="h-full w-full flex items-center justify-center">
                    <Image className='h-[100px] w-[100px]' height={500} width={500} priority src="/images/loader.gif" alt='' />
                </div>
                :
                <div className='ServiceDashDetails relative'>

                    <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-20px]">
                        <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                        Back
                    </p>

                    <div className="flex justify-between items-center">
                        <h2 className="text-[24px] capitalize font-semibold text-primary">{singleServiceData.title}</h2>


                        <Link href={address}>  <button className="button1 w-[200px]">Edit</button> </Link>
                    </div>

                    <div className=" h-[78vh] border-b-[1px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                        <div className="flex gap-[25px]">
                            <div className="w-[50%] shrink-0 bg-white rr overflow-hidden h-[400px]">
                                <Image className='h-full w-full object-cover' height={500} width={500} priority src={singleServiceData.imageURL} alt='' />
                            </div>
                            <div className="flex flex-col gap-[0px]">
                                <div>
                                    <p className="text-primary text-[20px]">Description</p>
                                    <p className="text-neutral-600 mt-[10px] text-[16px]">{singleServiceData.description}</p>
                                </div>

                            </div>
                        </div>

                        <div className="bg-white rr w-full h-[600px] mt-[70px] p-[20px]">
                            <div dangerouslySetInnerHTML={{ __html: singleServiceData.text }}></div>
                            {/* {singleBlogData.blog} */}
                        </div>

                        <button onClick={()=>setShowConfirmation(true)} className="bg-red-600 rr h-[60px] px-[25px] text-white font-semibold my-[20px]">Delete</button>

                    </div>

                    {showConfirmation && (
                        <ConfirmationBox
                            onConfirm={exitClick}
                            onCancel={handleCancel}
                            message="Are you sure you want to delete this service ?"
                        />
                    )}

                </div>
            }
        </MainDash>
    );
}

export default ServiceDashDetails;