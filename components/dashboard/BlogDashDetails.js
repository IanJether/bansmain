'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import getSingleBlog from "@/db/blogs/fetchOneBlog";
import { useEffect, useState } from "react";
import Image from "next/image";


function BlogDashdetails() {



    const router = useRouter();

    const params = useParams();

 


    const { isLoading, singleBlogData } = getSingleBlog(params.blogDashTitle);

    


    





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


                        <Link href="">  <button className="button1 w-[200px]">Edit</button> </Link>
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
                                <div dangerouslySetInnerHTML={{__html: singleBlogData.blog}}></div>
                                {/* {singleBlogData.blog} */}
                            </div>

                    </div>



                </div>

            }
        </MainDash>
    );
}

export default BlogDashdetails;