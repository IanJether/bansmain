'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";
import Link from "next/link";
import getReviews from "@/db/reviews/fetchReviews";
import Image from "next/image";



function ReviewsDash() {

    const { isLoading, reviewsData } = getReviews();

    return (
        <MainDash>
            <div className='ReviewsDash'>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">All Reviews</h2>


                    <div className="h-[40px] shadow-sm flex  items-center justfiy-between rounded-full
                     border border-gray-200 w-[370px] shadow-md px-[15px] text-[14px] bg-white">
                        <input className="h-full w-full outline-none" type="text" placeholder="Search reviews here... " />
                        {/* <Image className="h-[50%] w-[60px] " height={600} width={600} src="/images/icons/search.svg" alt="" /> */}
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                    </div>


                    <Link href="/dashboard/reviews/addreview"> <button className="button1 w-[200px]">Add New Review</button> </Link>
                </div>


                <div className=" h-[78vh] border-b-[1px]  pb-[50px] w-full rr mt-[25px] overflow-scroll no-scrollbar">
                    {isLoading ?
                        <div className="h-full w-full flex items-center justify-center">
                            <Image className='h-[100px] w-[100px]' height={500} width={500} priority src="/images/loader.gif" alt='' />
                        </div>
                        :
                        <div className=" flex flex-wrap gap-[2.6vw]">
                            {reviewsData.map((items, index) => {

                                return (
                                    <div key={index} className="w-[31%] p-[20px] shadow-md border bg-white rr">
                                        <p className="text-neutral-500 italic">"{items.review}"</p>

                                        <div className="mt-[30px] flex gap-[10px] items-center">
                                            <div className="h-[85px] w-[85px] bg-gray-100 rounded-full overflow-hidden">
                                                <Image className='h-full w-full object-cover' height={500} width={500} priority src={items.imageURL} alt='' />
                                            </div>
                                            <div>
                                                <p className="font-semibol text-primary ">{items.name}</p>
                                                <p className="font-semibol text-[14px] text-sec">{items.company}</p>
                                                <p className="text-[14px]">{items.position}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    }



                </div>

            </div>
        </MainDash>
    );
}

export default ReviewsDash;