'use client'
import { useRouter } from "next/navigation";
import MainDash from "./common/MainDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";





function ServiceDashDetails() {
    const router = useRouter();
    return (
        <MainDash>
            <div className='ServiceDashDetails relative'>

                <p onClick={() => router.back()} className="text-primary hover:text-sec2 hover:underline cursor-pointer absolute top-[-18px]">
                    <span className="mr-[6px]"><FontAwesomeIcon icon={faAngleLeft} /></span>
                    Back
                </p>

                <div className="flex justify-between items-center">
                    <h2 className="text-[24px] capitalize font-semibold text-primary">Retail Security</h2>


                    <Link href="">  <button className="button1 w-[200px]">Edit</button> </Link>
                </div>

                <div className=" h-[78vh] border-b-[1px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

                    <div className="flex gap-[25px]">
                        <div className="w-[50%] shrink-0 bg-white rr h-[400px]">

                        </div>
                        <div className="flex flex-col gap-[0px]">
                            <div>
                                <p className="text-primary text-[20px]">Description</p>
                                <p className="text-neutral-600 mt-[10px] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam est eius labore beatae suscipit, fuga eos obcaecati sint, delectus consequatur numquam sed fugit sit aperiam totam </p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-[40px] h-[600px] w-full bg-white rr">

                    </div>

                </div>

            </div>
        </MainDash>
    );
}

export default ServiceDashDetails;