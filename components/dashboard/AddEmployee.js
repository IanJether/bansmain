'use client'

import { useRouter } from "next/navigation";
import MainDash from "./common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import LoaderComp from "../Loader";
import { AllContext } from "@/states/context";
import { handlePostEmployee } from "@/db/employees/postEmployees";



function AddEmployee() {

    const router = useRouter();

    const [imgprev, setImgprev] = useState("");
    const [file, setFile] = useState("none");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const {globalLoading, setGlobalLoading, resetValues, setResetValues} = useContext(AllContext);

    
    const fileChange = (event) => {

        const inp = document.getElementById("imageinput");

        const [file] = inp.files

        setFile(event.target.files[0])
        setImgprev(URL.createObjectURL(file))

    }

    const handleSubmit = () =>{
        handlePostEmployee(file,name,position,setGlobalLoading,setResetValues,resetValues)
    }


    useEffect(()=>{

        setName("")
        setPosition("")
        setFile('none')
        setImgprev('')

    },[resetValues])

    return (
        <MainDash>
            <div className='AddEmployee relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">  Add Employee</h2>


                    <button onClick={()=>handleSubmit()} className="button1 w-[200px]">Submit</button>
                </div>

                <div className=" h-[78vh] border-b-[1px] bg-white shadow-sm  p-[30px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                <div className="flex flex-col gap-[5px]">
                        <label className="font-semibold text-neutral-600" htmlFor="">Image</label>
                        <div className="flex gap-[50px]">

                            <div className="overflow-hidden flex items-center justify-center h-[330px] w-[32%] bg-gray-100 rr">
                                {imgprev !== "" ?
                                    <Image className="h-full w-full object-contain" height={200} width={200} src={imgprev} alt="" /> :
                                    <Image className=" h-[50px]" height={300} width={300} src="/images/noImage.svg" alt="" />}
                            </div>
                            <div className="text-[24px] cursor-pointer bg-white text-neutral-700 border-2 border-neutral-400 rounded-[5px] h-[50px] w-[50px] font-light mb-[10px] flex items-center justify-center">
                                <input id="imageinput" onChange={fileChange} className="hidden" type="file" accept="image/jpeg, image/png, image/jpg" name="imageinput" />
                                <label htmlFor="imageinput">
                                    {file !== "none" ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
                                </label>

                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} className="inputContact" type="text" />
                            {/* <p className="mt-[3px] text-red-500 text-[13px]">*6 words max</p> */}

                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Position</label>
                            <input value={position} onChange={(e)=>setPosition(e.target.value)} className="inputContact" type="text" />

                        </div>
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Position</label>
                            <input className="inputContact" type="text" /> */}

                        </div>
                    </div>
                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            {/* <label className="font-semibold text-neutral-600" htmlFor="">Description</label>
                            <textarea className="bg-gray-100 rr h-[] mt-[10px] p-[10px] h-[200px] outline-none border-sec focus:border hover:border" type="text" />
                            <p className="mt-[3px] text-red-500 text-[13px]">*10 words max</p> */}

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

                </div>

                {globalLoading && <LoaderComp/>}

            </div>
        </MainDash>
    );
}

export default AddEmployee;