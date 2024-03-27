'use client'

import { useParams, useRouter } from "next/navigation";
import MainDash from "../common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import LoaderComp from "../../Loader";
import { AllContext } from "@/states/context";
import { handlePostEmployee } from "@/db/employees/postEmployees";
import { handleUpdateEmployee } from "@/db/employees/updateEmployees";
import getEmployees from "@/db/employees/fetchEmployees";



function EditEmployee() {

    const { isLoading, employeesData } = getEmployees();

    const params = useParams();

    const employeeData = employeesData.find((items, index) => items.id == params.employeeId)

    const router = useRouter();

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const { globalLoading, setGlobalLoading, resetValues, setResetValues, triggerNotification } = useContext(AllContext);




    const handleSubmit = () => {
        handleUpdateEmployee(name, position, setGlobalLoading, setResetValues, resetValues, router, params.employeeId, triggerNotification)
    }


    useEffect(() => {

        setName("")
        setPosition("")

    }, [resetValues])



    useEffect(() => {

        if (employeeData) {
            setName(employeeData.name)
            setPosition(employeeData.position)
        }

    }, [isLoading])



    return (
        <MainDash>
            <div className='AddEmployee relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">Edit Employee</h2>


                    <button onClick={() => handleSubmit()} className="button1 w-[200px]">Submit</button>
                </div>

                {isLoading ?
                    <LoaderComp />
                    :
                    <div className=" h-[78vh] border-b-[1px] bg-white shadow-sm  p-[30px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                        <div className="flex flex-col gap-[5px]">
                            <label className="font-semibold text-neutral-600" htmlFor="">Image</label>
                            <div className="flex gap-[50px] w-[32%] h-[350px] rr overflow-hidden">
                                <Image className="w-full h-full object-cover" height={600} width={600} src={employeeData.imageURL} alt="" />

                            </div>

                        </div>

                        <div className="flex justify-between gap-[25px] mt-[25px]">
                            <div className="flex flex-col w-full">
                                <label className="font-semibold text-neutral-600" htmlFor="">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="inputContact" type="text" />
                                {/* <p className="mt-[3px] text-red-500 text-[13px]">*6 words max</p> */}

                            </div>
                            <div className="flex flex-col w-full">
                                <label className="font-semibold text-neutral-600" htmlFor="">Position</label>
                                <input value={position} onChange={(e) => setPosition(e.target.value)} className="inputContact" type="text" />

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
                }





            </div>
        </MainDash>
    );
}

export default EditEmployee;