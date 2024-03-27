'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "../common/MainDash";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import getSingleBlog from "@/db/blogs/fetchOneBlog";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import ConfirmationBox from "@/components/common/ConfirmBox";
import { deleteDoc, doc } from "firebase/firestore";
import { AllContext } from "@/states/context";
import { db } from "@/db/config";


function BlogDashdetails() {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const { setGlobalLoading , triggerNotification} = useContext(AllContext);

    const router = useRouter();

    const params = useParams();

    const { isLoading, singleBlogData } = getSingleBlog(params.blogDashTitle);

    const address = "/dashboard/blogs/" + params.blogDashTitle + '/edit'


    const handleCancel = () => {
        setShowConfirmation(false)
    }

    const exitClick = () => {

        setGlobalLoading(true)
        setShowConfirmation(false)

        deleteDoc(doc(db, 'blogs' , params.blogDashTitle )).then(()=>{
            setGlobalLoading(false)
            triggerNotification('success','Blog Deleted Successfully')
            router.push('/dashboard/blogs')
        }).catch(()=>{
            alert('Error')
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
                <div className='BlogDashdetails relative'>

                    <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                        <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                        Back
                    </p>

                    <div className="flex justify-between items-center">
                        <h2 className="text-[24px] capitalize font-semibold text-primary">{singleBlogData.title}</h2>


                        <Link href={address}>  <button className="button1 w-[200px]">Edit</button> </Link>
                    </div>

                    <div className="h-[78vh] border-b-[1px] w-full rr mt-[25px] overflow-scroll no-scrollbar">


                        <div className="flex gap-[20px]">
                            <div className="bg-white shrink-0 rr h-[400px] overflow-hidden w-[50%] shadow-sm">
                                <Image className="h-full w-full object-cover" height={1000} width={1000} src={singleBlogData.imageURL} alt="" />
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex gap-[60px]">

                                    <div>
                                        <p className="text-primary text-[20px]">Author</p>
                                        <p className="text-neutral-600 text-[15px]">{singleBlogData.author}</p>
                                    </div>
                                    <div>
                                        <p className="text-primary text-[20px]">Published On</p>
                                        <p className="text-neutral-600 text-[15px]">28th March 2022</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-primary text-[20px]">Description</p>
                                    <p className="text-neutral-600 text-[15px]">{singleBlogData.description}</p>
                                </div>


                            </div>
                        </div>

                        <div className="bg-white rr w-full h-[600px] mt-[70px] p-[20px]">
                            <div dangerouslySetInnerHTML={{ __html: singleBlogData.blog }}></div>
                            {/* {singleBlogData.blog} */}
                        </div>

                        <button onClick={()=>setShowConfirmation(true)} className="bg-red-600 rr h-[60px] px-[25px] text-white font-semibold my-[20px]">Delete</button>

                    </div>

                    {showConfirmation && (
                        <ConfirmationBox
                            onConfirm={exitClick}
                            onCancel={handleCancel}
                            message="Are you sure you want to delete this blog?"
                        />
                    )}






                </div>

            }
        </MainDash>
    );
}

export default BlogDashdetails;