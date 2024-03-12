'use client'

import { useRouter } from "next/navigation";
import MainDash from "./common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


function AddServiceDash() {

    const router = useRouter();

    return (
        <MainDash>
            <div className='AddServiceDash relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">  Add Service</h2>


                    <Link href="/dashboard/blogs/addblog">  <button className="button1 w-[200px]">Submit</button> </Link>
                </div>

                <div className=" h-[78vh] border-b-[1px] bg-white shadow-sm  p-[30px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Title</label>
                            <input className="inputContact" type="text" />
                            <p className="mt-[3px] text-red-500 text-[13px]">*6 words max</p>

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Author</label>
                            <input className="inputContact" type="text" /> */}

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Email</label>
                            <input value="ben@bansprotection.co.ke" className="inputContact" type="text" /> */}

                        </div>
                    </div>
                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Description</label>
                            <textarea className="bg-gray-100 rr h-[] mt-[10px] p-[10px] h-[200px] outline-none border-sec focus:border hover:border" type="text" />
                            <p className="mt-[3px] text-red-500 text-[13px]">*10 words max</p>

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Author</label>
                            <input className="inputContact" type="text" /> */}

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Email</label>
                            <input value="ben@bansprotection.co.ke" className="inputContact" type="text" /> */}

                        </div>
                    </div>

                    <div className="mt-[40px]">
                        <label className="font-semibold text-neutral-600" htmlFor="">text</label>
                        <div className="w-full mt-[10px] bg-gray-100 h-[600px]">

                        </div>

                    </div>
                  
                </div>

            </div>
        </MainDash>
    );
}

export default AddServiceDash;