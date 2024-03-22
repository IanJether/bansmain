'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "../common/MainDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";
import { useRouter } from "next/navigation";
import { getLink } from "@/data/getLink";


function MessagesDash() {

    const router = useRouter();

    return (
        <MainDash>
            <div className='MessagesDash'>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">All Messages</h2>


                    <div className="h-[40px] shadow-sm flex  items-center justfiy-between rounded-full
                     border border-gray-200 w-[370px] shadow-md px-[15px] text-[14px] bg-white">
                        <input className="h-full w-full outline-none" type="text" placeholder="Search messages here... " />
                        {/* <Image className="h-[50%] w-[60px] " height={600} width={600} src="/images/icons/search.svg" alt="" /> */}
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                    </div>


                    {/* <button className="button1 w-[200px]">Add New Service</button> */}
                    <div className="w-[200px] h-[60px]"></div>
                </div>

                <div className=" h-[78vh] border-b-[1px] bg-white  pb-[50px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    {BlogsList.map((items,index)=>{

                        const address = "/dashboard/messages/" + getLink(items.title)

                        return(
                            <div onClick={()=>router.push(address)} key={index} className="mappedBlogs cursor-pointer w-full h-[95px] border-b-[2px] p-[15px]">
                                <div className="flex justify-between">
                                    <h3 className="font-semibol text-[17px] text-primary">Ian Jether</h3>
                                    <p className="font-semibold text-neutral-500">23/6/24</p>
                                </div>
                                <p className="h-[24px] text-[15px] text-neutral-600 mt-[5px] overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut dolore doloribus, ex velit eum quis iste a reprehenderit facilis commodi cumque itaque nisi temporibus veniam debitis minima! Nam, culpa.</p>

                            </div>
                        )
                    })}
                   

                </div>

            </div>
        </MainDash>
    );
}

export default MessagesDash;