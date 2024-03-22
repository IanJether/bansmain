'use client'
import { useParams, useRouter } from "next/navigation";
import MainDash from "../common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import getSingleService from "@/db/services/fetchSingleService";
import Image from "next/image";





function ServiceDashDetails() {

    const router = useRouter();

    const params = useParams();

    const { isLoading, singleServiceData } = getSingleService(params.servicesDashTitle);

    console.log(singleServiceData)

    const address = "/dashboard/services/" + params.servicesDashTitle + "/edit"


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

                    </div>

                </div>
            }
        </MainDash>
    );
}

export default ServiceDashDetails;