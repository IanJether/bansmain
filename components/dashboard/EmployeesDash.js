import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";
import Link from "next/link";



function Employeesdash() {
    return (
        <MainDash>
            <div className='Employeesdash'>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">All Employess</h2>


                    <div className="h-[40px] shadow-sm flex  items-center justfiy-between rounded-full
                     border border-gray-200 w-[370px] shadow-md px-[15px] text-[14px] bg-white">
                        <input className="h-full w-full outline-none" type="text" placeholder="Search Employees here... " />
                        {/* <Image className="h-[50%] w-[60px] " height={600} width={600} src="/images/icons/search.svg" alt="" /> */}
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                    </div>


                  <Link href="/dashboard/employees/addemployee">  <button className="button1 w-[200px]">Add New Employee</button> </Link>
                </div>

                <div className=" h-[78vh] border-b-[1px]  pb-[50px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className=" flex flex-wrap gap-[2.6vw]">
                        {BlogsList.map((items, index) => {

                            return (
                                <div key={index} className="w-[31%] shadow-md border bg-white rr">

                                    <div className="h-[300px] bg-gray-200">

                                    </div>
                                    <div className="p-[20px] text-center">
                                        <p className="font-semibol text-[18px] text-primary">Ian Jether</p>
                                        <p className="font-semibol text-sec text-[14px]">Managing Director</p>
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

export default Employeesdash;