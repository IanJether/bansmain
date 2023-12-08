import Navbar from "@/common/Navbar";
import { servicesList } from "@/data/services";
import Stats from "@/data/stats";
import { faArrowRight, faBars, faEnvelope, faPhone, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Landing() {
    return (
        <div className='Landing'>

            <div className='Navbar'>
                {/* mobile navbar  */}

                <div className="mobilenav z-50 fixed top-[0px] w-[100vw]">

                    <div className="bg-gray-700 pad flex items-center justify-center gap-[20px] text-[12px] text-orange-500 h-[30px]">
                        <div className="flex gap-[8px] items-center">
                            <FontAwesomeIcon icon={faPhone} />
                            0712345678
                        </div>
                        <div className="flex gap-[8px] items-center">
                            <FontAwesomeIcon icon={faEnvelope} />
                            info@bansprotection.co.ke
                        </div>

                    </div>

                    <div className="flex bg-white justify-between items-center pad h-[55px] shadow-md">

                        <div className="font-semibold">
                            <h2>LOGO</h2>
                        </div>
                        <div className="text-[18px]">
                            <FontAwesomeIcon icon={faBars} />
                        </div>

                    </div>

                </div>
            </div>

            {/* Section 1  */}

            <div className="sectionone relative h-[550px] mb-[230px] bg-gray-700">

                <div className="absolute top-[0px] h-full w-full flex flex-col gap-[30px] justify-center pad">
                    <h1 className="text-[30px] text-white">GROW YOUR BUSINESS MORE SECURE</h1>
                    <p className="text-[16px] text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perspiciatis rerum, </p>
                    <div className="flex  gap-[20px]">
                        <button className="h-[60px] rr uppercase text-[14px] px-[20px] border border-[2px] border-orange-500 font-semibold">Contact Us</button>
                        <button className="h-[60px] rr uppercase text-[14px] bg-orange-500 text-black px-[20px] font-semibold">Services</button>
                    </div>
                </div>

                <div className="absolute bottom-[-235px] pad ">
                    <div className="rr flex flex-col gap-[17px] justify-center border-b-[4px] border-orange-500  bg-white shadow-md h-[270px] p-[20px] text-center">
                       <span className="text-orange-500 text-[30px]"> <FontAwesomeIcon className="" icon={faSchool}/> </span>
                        <h3 className="font-semibold text-[20px]">24/7 Client Support</h3>
                        <p className="text-[16px] text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta suscipit ullam. Labore, nesciunt ipsa. Est soluta </p>
                    </div>

                </div>

            </div>

            

            {/* section 2  */}

            <div className="sectiontwo flex flex-col gap-[50px] pad py-[50px]">

                <div className="flex flex-col gap-[15px]">
                    <h2 className="font-semibold text-[28px]"><span className="text-orange-500"> About </span> Bans Protection</h2>
                    <p className="text-neutral-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat et nostrum? Deleniti saepe eligendi id corporis illum odit </p>
                    <p className="text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur ipsa error, provident id temporibus quae corporis nostrum voluptatem, vel omnis tempora deserunt fuga? Vel voluptatum impedit iure debitis beatae.</p>
                    <div className="flex flex-col mt-[5px] gap-[15px]">
                        {Stats.map((items,index)=>{

                            return(
                                <div key={index} className="mappedStat flex flex-col gap-[px]">
                                    <p className="font-bold text-[35px]">{items.number}</p>
                                    <p className="font-semibold text-[18px]">{items.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="h-[300px] rr bg-gray-700">

                </div>

            </div>

            {/* section 3  */}

            <div className="bg-gray-700 flex flex-col gap-[20px] pad py-[50px] text-white">
                <h2 className="text-[28px] font-semibold ">What We <span className="text-orange-500">Offer</span> Here</h2>
                <p className="text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta quibusdam illum dicta aspernatur consequuntur corporis! Tempora harum, veritatis dicta assumenda.</p>
                <div className="flex flex-col mt-[20px] gap-[40px]">
                   {servicesList.map((items,index)=>{

                    return(
                        <div key={index} className="mappedServices bg-gray-100 rr p-[20px] h-[234px] flex">
                            <div className="w-[15%] text-[30px] text-blue-800">
                                <FontAwesomeIcon icon={items.icon}/>
                            </div>
                            <div className="flex flex-col gap-[10px] w-[85%]">
                                <h3 className="text-[20px] text-black font-semibold">{items.name}</h3>
                                <p className="text-neutral-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima harum quasi provident error, accusantium quos! Assumenda eligendi </p>
                                <p className="text-[15px] text-orange-500">Learn More <FontAwesomeIcon icon={faArrowRight}/></p>
                            </div>
                        </div>
                    )
                   })}
                </div>         
            </div>

            {/* section four  */}

            <div className="section4 flex flex-col gap-[20px] pad py-[50px]">
                <h2 className="text-[28px] font-semibold">Our <span className="text-orange-500">Expert</span> Employees</h2>
                <p className="text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem </p>

                <div className="flex flex-col items-center gap-[20px] mt-[20px]">
                    {servicesList.map((items,index)=>{

                        return(
                            <div key={index} className="mappedteam flex flex-col items-center w-[95%]">
                                <div className="h-[300px] rr w-[85%] bg-gray-800">

                                </div>
                                <div className="h-[100px] w-[101%] border-b-[4px] border-orange-500 flex flex-col gap-[2px] items-center justify-center rr bg-gray-200 mt-[-30px]">
                                    <h3 className="font-semibold text-[24px]">Edewait Eric</h3>
                                    <p className="text-[14px] font-semibold ">CEO & Director</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

export default Landing;