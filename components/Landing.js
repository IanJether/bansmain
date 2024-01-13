import Navbar from "@/components/common/Navbar";
import { servicesList } from "@/data/services";
import Stats from "@/data/stats";
import { faAngleLeft, faAngleRight, faArrowRight, faBars, faCalendar, faEnvelope, faPhone, faSchool, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socialsLink";
import { NavbarList } from "@/data/NavbarList";
import { getLink } from "@/data/getLink";
import { supportDetails } from "@/data/supportdetails";
import { TeamList } from "@/data/team";

function Landing() {
    return (
        <div className='Landing'>

    

            {/* Section 1  */}

            <div className="sectionone relative h-[550px] lg:h-[90vh] mb-[230px] lg:mb-[0] bg-gray-700">
                <Image className="h-full w-full object-cover filter brightness-[74%]" height={2000} width={2000} alt="" src="/images/three.jpg" />
                <div className="absolute top-[0px] h-full w-full flex flex-col gap-[20px] lg:gap-[30px] justify-center pad">
                    <h1 className="text-[30px] lg:text-[40px] font-semibold lg:w-[50%] lg:leading-[45px] capitalize text-white">Grow Your business more secure</h1>
                    <p className="text-[16px] font-semibold text-white lg:w-[40%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perspiciatis rerum, </p>
                    <div className="flex mt-[5px] gap-[20px]">
                        <button className="h-[60px] rr uppercase text-[14px] text-white px-[20px] border border-[2px] border-orange-500 font-semibold">Contact Us</button>
                        <button className="button1">Services</button>
                    </div>
                </div>

                <div className="absolute lg:hidden bottom-[-235px] pad ">
                    <div className="rr flex flex-col gap-[17px] justify-center border-b-[4px] border-orange-500  bg-white shadow-md h-[270px] p-[20px] text-center">
                        <span className="text-orange-500 text-[36px]"> <FontAwesomeIcon className="" icon={faUserCircle} /> </span>
                        <h3 className="font-semibold text-[20px]">24/7 Client Support</h3>
                        <p className="text-[16px] text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta suscipit ullam. Labore, nesciunt ipsa. Est soluta </p>
                    </div>

                </div>

            </div>

            {/* sectionone  */}

            <div className="hidden lg:flex pad justify-between py-[40px]">
                {supportDetails.map((items, index) => {

                    return (
                        <div className="rr flex flex-col border-t gap-[17px] w-[26vw] justify-center border-b-[4px] border-orange-500  bg-white shadow-md h-[270px] p-[20px] text-center">
                            <span className="text-orange-500 text-[30px]"> <FontAwesomeIcon className="" icon={items.image} /> </span>
                            <h3 className="font-semibold text-[20px]">{items.title}</h3>
                            <p className="text-[16px] text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta suscipit ullam. Labore, nesciunt ipsa. Est soluta </p>
                        </div>
                    )
                })}
            </div>



            {/* section 2  */}

            <div className="sectiontwo flex flex-col lg:flex-row items-center gap-[50px] pad py-[50px] lg:pb-[150px]">

                <div className="flex flex-col lg:w-[50%] gap-[15px] lg:gap-[30px]">
                    <h2 className="font-semibold text-[28px]"><span className="text-orange-500"> About </span> Bans Protection</h2>
                    <p className="text-neutral-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat et nostrum? Deleniti saepe eligendi id corporis illum odit </p>
                    <p className="text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur ipsa error, provident id temporibus quae corporis nostrum voluptatem, vel omnis tempora deserunt fuga? Vel voluptatum impedit iure debitis beatae.</p>
                    <div className="flex flex-col lg:flex-row lg:justify-between mt-[5px] gap-[15px] lg:gap-[25px]">
                        {Stats.map((items, index) => {

                            return (
                                <div key={index} className="mappedStat flex flex-col lg:items-center gap-[px]">
                                    <p className="font-bold text-[35px]">{items.number}+</p>
                                    <p className="font-semibold text-[18px]">{items.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="h-[300px] overflow-hidden w-full lg:h-[60vh] lg:w-[50%] rr bg-gray-700">
                    <Image className="h-full w-full object-cover" height={2000} width={2000} alt="" src="/images/one.jpg" />
                </div>

            </div>

            {/* section 3  */}

            <div className="h-[1150px] lg:h-[92vh] bg-gray-700 relative">
                <Image className="h-full w-full object-cover filter brightness-[38%]" height={2000} width={2000} alt="" src="/images/four.jpg" />
                <div className="absolute top-[0px] h-full w-full flex flex-col gap-[35px] pad py-[50px]  lg:justify-center text-white">
                    <h2 className="text-[28px] font-semibold ">What We <span className="text-orange-500">Offer</span> Here</h2>
                    <p className="text-neutral-200 lg:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta quibusdam illum dicta aspernatur consequuntur corporis! Tempora harum, veritatis dicta assumenda.</p>
                    <div className="flex flex-col lg:flex-row mt-[20px] gap-[40px]">
                        {servicesList.map((items, index) => {

                            return (
                                <div key={index} className="mappedServices bg-opacity-[85%] bg-gray-100 rr p-[20px] h-[234px] flex ">
                                    <div className="w-[15%] text-[30px] text-blue-800">
                                        <FontAwesomeIcon icon={items.icon} />
                                    </div>
                                    <div className="flex flex-col gap-[10px] w-[85%]">
                                        <h3 className="text-[20px] text-black font-semibold">{items.name}</h3>
                                        <p className="text-neutral-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima harum quasi provident error, accusantium quos! Assumenda eligendi </p>
                                        <p className="text-[15px] text-orange-500">Learn More <FontAwesomeIcon icon={faArrowRight} /></p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            {/* section four  */}

            <div className="section4 flex flex-col gap-[20px] lg:text-center lg:gap-[30px] pad py-[50px] lg:py-[100px]">
                <h2 className="text-[28px] font-semibold">Our <span className="text-orange-500">Expert</span> Employees</h2>
                <p className="text-neutral-700 lg:w-[50%] lg:mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius sunt dignissimos </p>

                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[20px] mt-[20px]">
                    {TeamList.map((items, index) => {

                        return (
                            <div key={index} className="mappedteam flex flex-col items-center w-[95%] lg:w-[22vw]">
                                <div className="h-[350px] overflow-hidden rr w-[85%] bg-gray-800">
                                    <Image className="h-full w-full object-cover" height={500} width={500} src={items.image} alt="" />
                                </div>
                                <div className="h-[100px] w-[101%] border-b-[4px] border-orange-500 flex flex-col gap-[2px] items-center justify-center rr bg-gray-200 mt-[-30px]">
                                    <h3 className="font-semibold text-[24px]">{items.name}</h3>
                                    <p className="text-[14px] font-semibold ">{items.position}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

            {/* section five  */}

            <div className="relative h-[750px] lg:h-[90vh]">
                <Image className="h-full w-full object-cover filter brightness-[35%]" height={2000} width={2000} alt="" src="/images/six.jpg" />
                <div className="section5 absolute top-[0px] h-full w-full flex flex-col lg:flex-row lg:items-center gap-[70px]  py-[70px] pad text-white">

                    <div className="flex flex-col gap-[15px] lg:gap-[23px] lg:w-[40%]">
                        <h3 className="text-[15px] font-semibold text-orange-500">What people say about Us</h3>
                        <h2 className="text-[28px] font-semibold"><span className="text-orange-500 ">Client</span> Review</h2>
                        <p className="text-neutral-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia provident voluptatibus dolorem saepe </p>
                        <button className="button1 mt-[10px] w-[150px]">see all</button>
                    </div>

                    <div className="flex flex-col gap-[30px] lg:gap-[40px] lg:w-[60%]">
                        <div className="flex items-center gap-[8px]">
                            <span className="bg-orange-500 h-[46px] p-[10px] rr"><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <p className="text-center text-neutral-200 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi omnis necessitatibus. Aliquam, magnam. Officia corporis fuga explicabo id, accusantium ad tenetur adipisci</p>
                            <span className="bg-orange-500 h-[46px] p-[10px] rr"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </div>
                        <div className="flex flex-col items-center gap-[5px]">
                            <div className="bg-teal-500 h-[60px] w-[60px] rounded-full"></div>
                            <h3 className="text-[21px] font-semibold text-orange-500">Edewait Eric</h3>
                            <h4 className="font-semibold">CEO - Finetek</h4>
                        </div>
                    </div>

                </div>

            </div>


            {/* section six  */}

            <div className="section6 flex flex-col gap-[10px] lg:gap-[20px] text-center py-[50px] lg:py-[100px] pad">
                <h2 className="text-[28px] font-semibold"><span className="text-orange-500">Recent</span> News</h2>
                <p className="text-[15px] text-neutral-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto voluptate quia, facere, aliquid nemo quas  </p>
                <div className="flex flex-col lg:flex-row lg:justify-between mt-[25px] lg:mt-[30px] gap-[30px]">
                    {servicesList.map((items, index) => {

                        return (
                            <div key={index} className="mappednews rr h-[400px] lg:h-[55vh] lg:w-[23vw] overflow-hidden">
                                <div className="h-[50%]  bg-gray-700">

                                </div>
                                <div className="h-[50%]  relative bg-gray-100 shadow-md p-[15px] text-center flex flex-col gap-[10px]">
                                    <h2 className="font-semibold text-[20px]">Post Title Will Be Here</h2>
                                    <p className="text-[15px] text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eius quae, nobis rerum </p>
                                    <div className="flex gap-[20px] px-[10px] justify-center h-[45px] rr bg-black absolute text-white bottom-[0px] left-[10%] w-[80%]">
                                        <div className="flex gap-[5px] items-center ">
                                            <FontAwesomeIcon className="text-orange-500" icon={faCalendar} />
                                            <p className="text-[13px]">24 Dec 2023</p>
                                        </div>
                                        <div className="flex gap-[5px] items-center">
                                            <FontAwesomeIcon className="text-orange-500" icon={faUser} />
                                            <p className="text-[13px]">Edewait</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Footer */}


        </div>
    );
}

export default Landing;