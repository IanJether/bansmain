'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";
import Link from "next/link";
import { getLink } from "@/data/getLink";
import { useRouter } from "next/navigation";


function BlogsDash() {

    const router = useRouter()

    return (
        <MainDash>
            <div className='BlogsDash  '>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">All Blogs</h2>


                    <div className="h-[40px] shadow-sm flex  items-center justfiy-between rounded-full
                     border border-gray-200 w-[370px] shadow-md px-[15px] text-[14px] bg-white">
                        <input className="h-full w-full outline-none" type="text" placeholder="Search blogs here... " />
                        {/* <Image className="h-[50%] w-[60px] " height={600} width={600} src="/images/icons/search.svg" alt="" /> */}
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                    </div>


                  <Link href="/dashboard/blogs/addblog">  <button className="button1 w-[200px]">Add New Blog</button> </Link>
                </div>

                <div className=" h-[78vh] border-b-[1px]  pb-[50px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className=" flex flex-wrap gap-[2.6vw]">
                        {BlogsList.map((items, index) => {

                            const address = "/dashboard/blogs/" + getLink(items.title)
                            return (
                                <div onClick={()=>router.push(address)} key={index} className="w-[31%] cursor-pointer p-[20px] shadow-md border bg-white rr">
                                    <div className="bg-gray-100 h-[250px] rr">

                                    </div>

                                    <h3 className="mt-[20px] font-semibol text-neutral-600">{items.date}</h3>

                                    <h2 className="font-semibol mt-[10px] text-[17px] text-primary hover:underline">{items.title}</h2>

                                    <p className="font-semibol text-[15px] text-sec mt-[10px]">By {items.author}</p>

                                </div>
                            )
                        })}

                    </div>

                </div>


            </div>
        </MainDash>
    );
}

export default BlogsDash;