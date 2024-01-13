import Link from "next/link";
import Header from "./common/Header";
import { BlogsList } from "@/data/blogs";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getLink } from "@/data/getLink";



function BlogsComp() {
    return (
        <div className='BlogsComp'>

            <Header page="Blogs" pagehead="Blogs" />

            <div className="sectiononeNews flex flex-col gap-[50px] lg:gap-[70px] pad py-[40px] lg:py-[100px] lg:pb-[130px]">
                <div className="51top flex flex-col lg:flex-row lg:justify-between gap-[20px]">
                    <div className="text-[28px] font-semibold"><h2>News and Stories <div className="und"></div></h2></div>
                    <div className="hidden lg:block"> <Link href="/contact"> <button className="bg-orange-500 hover:bg-sec2 h-[50px] rr text-white font-semibold px-[15px]">Contact Us</button></Link></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="400" className="52bottom flex flex-wrap justify-betwee gap-[40px]">
                    {BlogsList.map((items, index) => {

                        const address = "/news/" + getLink(items.title)

                        return (
                           <Link href={address} key={index}> <div className="mappednews cursor-pointer bg-white rr shadow-xl hover:shadow-2xl md:w-[315px] lg:w-[24vw]">
                                <div className="h-[240px] lg:h-[30vh] overflow-hidden bg-gray-500">
                                    <Image priority className="h-full w-full object-cover" quality={70} height={1000} width={1000} src={items.image} />
                                </div>
                                <div className="p-[18px] flex flex-col gap-[10px]">
                                    <div className="text-[15px] font-bold text-stone-600"><p>{items.date}</p></div>
                                    <div className="text-[16px] font-semibold text-primary1"><h3>{items.title}</h3></div>
                                    <div className="text-[15px]"><p>{items.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem voluptate dignissimos sit obcaecati voluptatem, modi eligendi quasi soluta dolore magni veniam ex quos? Repellat quae fuga sint repudiandae omnis!</p></div>
                                    <div><p className="text-[15px] font-semibold text-orange-500 hover:underline">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></p></div>
                                </div>
                            </div> </Link>
                        )
                    })}

                </div>

            </div>


        </div>
    );
}

export default BlogsComp;