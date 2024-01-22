import { servicesList } from "@/data/services";
import Header from "./common/Header";
import { getLink } from "@/data/getLink";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ServicesComp() {
    return (
        <div className='ServicesComp topspace'>
            <Header page="Services" pagehead="What we do" />

            <div className="flex flex-wrap justify-betwee pad gap-[35px] lg:w-full py-[60px] lg:py-[100px]">
                {servicesList.map((items, index) => {

                    const address = "/services/" + getLink(items.name)

                    return (
                        <Link href={address} key={index}>  <div key={index} className="flex flex-col items-center lg:w-[25vw] bg-white hover:shadow-xl">
                            <div className="mappedappliactionsteps rr overflow-hidden flex flex-col shadow-md gap-[10px] border relative">

                                <div className="h-[230px] overflow-hidden lg:h-[30vh] ">
                                    <Image className="h-full w-full object-cover" height={2000} width={2000} src={items.image} />
                                </div>

                                <div className="flex flex-col p-[25px]  gap-[10px] lg:pl-[35px]">
                                    <h4 className="text-primary font-semibold text-[20px]">{items.name}</h4>
                                    <p className="text-neutral-600">{items.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum corporis officiis nobis architecto asperiores soluta facere quos eveniet aspernatur iusto maxime incidunt, quod doloremque quisquam necessitatibus excepturi ullam. Doloribus?</p>
                                    <p className="text-orange-500 font-semibold hover:underline">Learn more <FontAwesomeIcon icon={faArrowRight} /></p>
                                </div>
                            </div>


                        </div>
                        </Link>
                    )
                })}

            </div>

        </div>
    );
}

export default ServicesComp;