import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";



function ReviewsDash() {
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


                    <button className="button1 w-[200px]">Add New Review</button>
                </div>


                <div className=" h-[78vh] border-b-[1px]  pb-[50px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className=" flex flex-wrap gap-[2.6vw]">
                        {BlogsList.map((items, index) => {

                            return (
                                <div key={index} className="w-[31%] p-[20px] shadow-md border bg-white rr">
                                    <p className="text-neutral-600 italic">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum assumenda perspiciatis amet, numquam soluta veritatis, ab obcaecati nesciunt  "</p>

                                    <div className="mt-[30px] flex gap-[10px] items-center">
                                        <div className="h-[85px] w-[85px] bg-gray-100 rounded-full">

                                        </div>
                                        <div>
                                            <p className="font-semibol text-primary ">Ian Jether</p>
                                            <p className="font-semibol text-[14px] text-sec">Fineteklabs</p>
                                            <p className="text-[14px]">Managing Director</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>
        </MainDash>
    );
}

export default ReviewsDash;