'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "../common/MainDash";
import { faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";
import Link from "next/link";
import getEmployees from "@/db/employees/fetchEmployees";
import Image from "next/image";
import ConfirmationBox from "@/components/common/ConfirmBox";
import { useContext, useState } from "react";
import { AllContext } from "@/states/context";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/db/config";



function Employeesdash() {

    const { isLoading, employeesData } = getEmployees();

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [id, setid] = useState(null)

    const { setGlobalLoading, triggerNotification } = useContext(AllContext);


    const handleCancel = () => {
        setShowConfirmation(false)
    }

    const exitClick = () => {

        setGlobalLoading(true)
        setShowConfirmation(false)

        deleteDoc(doc(db, 'employees', id)).then(() => {
            setGlobalLoading(false)
            triggerNotification('success', 'Employee Deleted')
        }).catch((error) => {
            triggerNotification('error', error)
            setGlobalLoading(false)
        })

    }


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

                    {isLoading ?
                        <div className="h-full w-full flex items-center justify-center">
                            <Image className='h-[100px] w-[100px]' height={500} width={500} priority src="/images/loader.gif" alt='' />
                        </div>
                        :

                        <div className=" flex flex-wrap gap-[2.6vw]">
                            {employeesData.map((items, index) => {

                                const address = '/dashboard/employees/' + items.id

                                return (
                                    <div key={index} className="w-[22.4%] shadow-md border bg-white rr relative">

                                        <div className="h-[300px] bg-gray-200 overflow-hidden">
                                            <Image className='h-full w-full object-cover' height={500} width={500} priority src={items.imageURL} alt='' />
                                        </div>
                                        <div className="p-[25px] text-center">
                                            <p className="font-semibol text-[18px] text-primary">{items.name}</p>
                                            <p className="font-semibol text-sec text-[14px]">{items.position}</p>
                                        </div>


                                        <Link href={address}> <button className="bg-primary/50 hover:bg-primary absolute bottom-[10px] right-[5%] text-white h-[30px] w-[30px] rr text-[10px]"><FontAwesomeIcon icon={faEdit} /></button> </Link>
                                        <button onClick={() => { setShowConfirmation(true); setid(items.id) }} className="bg-red-600/50 hover:bg-red-600 absolute bottom-[10px] left-[5%] text-white h-[30px] w-[30px] rr text-[10px]"><FontAwesomeIcon icon={faTrash} /></button>

                                    </div>
                                )
                            })}

                        </div>

                    }

                </div>

                {showConfirmation && (
                    <ConfirmationBox
                        onConfirm={exitClick}
                        onCancel={handleCancel}
                        message="Are you sure you want to delete this employee?"
                    />
                )}

            </div>
        </MainDash>
    );
}

export default Employeesdash;