'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";


function BlogDashdetails() {
    const router = useRouter();
    return (
        <MainDash>
            <div className='BlogDashdetails relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] capitalize font-semibold text-primary">This is the title of the blog here</h2>


                    <Link href="">  <button className="button1 w-[200px]">Edit</button> </Link>
                </div>

                <div className="h-[78vh] border-b-[1px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className="flex gap-[20px]">
                        <div className="bg-white shrink-0 rr h-[400px] w-[50%] shadow-md">

                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div>
                                <p className="text-primary text-[20px]">Author</p>
                                <p className="text-neutral-600 text-[15px]">Ian Jether</p>
                            </div>
                            <div>
                                <p className="text-primary text-[20px]">Published On</p>
                                <p className="text-neutral-600 text-[15px]">28th March 2022</p>
                            </div>
                            <div>
                                <p className="text-primary text-[20px]">Description</p>
                                <p className="text-neutral-600 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque voluptatem reiciendis a praesentium veritatis nam doloremque corporis totam alias! Maxime tempore, aliquam minima in possimus aspernatur beatae laboriosam deserunt.</p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rr w-full h-[600px] mt-[70px]">

                    </div>


                </div>



            </div>
        </MainDash>
    );
}

export default BlogDashdetails;