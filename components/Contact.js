import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./common/Header";
import { socialLinks } from "@/data/socialsLink";




function ContactComp() {

    const mySocialOrderList = [0, 1, 2];
    const mySocialOrderList2 = [0, 1, 2, 3, 4];

    return (
        <div className='ContactComp topspace bg-gray-100'>

            <Header page="Contact" pagehead="Contact Us" />


            <div className="sectiontwocontact flex flex-col lg:flex-row gap-[40px] py-[40px] lg:py-[100px] pad ">

                <div className="flex flex-col-reverse lg:flex-row-reverse shadow-xl lg:w-[79vw]  lg:gap-[0px]">



                    <div data-aos="fade-left" data-aos-duration="300" className="contactform bg-white  flex flex-col lg:w-[50%] gap-[20px] lg:px-[25px]  px-[15px] py-[30px]">
                        <h2 className="text-[28px] font-semibol">Contact Form <div className="und"></div></h2>

                        <div className="flex flex-col gap-[20px]">


                            <div>
                                <label htmlFor="">Name</label>
                                <input className="inp" type="text" />
                            </div>
                            <div>
                                <label htmlFor="">E-mail</label>
                                <input className="inp" type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Phone</label>
                                <input className="inp" type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Message</label>
                                <textarea className="h-[100px] w-full focus:bg-gray-100 rr border-b-2 border-gray-200 mt-[5px] p-[10px] outline-none focus:border-b focus:border-primary1" placeholder="Optional" type="text" />
                            </div>
                            <div><button className="bg-orange-500 uppercase text-[13px] hover:bg-sec2 h-[55px] rr text-white font-semibold px-[20px]">Submit</button></div>
                        </div>

                    </div>



                    <div data-aos="fade-right" data-aos-duration="300" className="h-[380px] lg:h-[608px] lg:full lg:w-[50%] relative overflow-hidden">
                        {/* <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/contact/possea.jpg" /> */}
                        <div className="ccmapped  h-full w-full absolute px-[20px] text-white flex flex-col gap-[25px] text-[16px] justify-center lg:justify-start top-[0px] inset-0 bg-blue-600">
                            <div className="text-[24px] lg:mt-[37px]"><h2>Contact Details <div className="und"></div> </h2></div>
                            {mySocialOrderList.map((items, index) => {

                                return (
                                    <div key={index} className="mappedsociallinks flex gap-[10px]">
                                        <div className="w-[20px] text-orange-500"><FontAwesomeIcon icon={socialLinks[items].icon} /></div>
                                        <div className="hover:text-orange-500 hover:underline"> <a target="_blank" href={socialLinks[items].link}> <p>{socialLinks[items].text}</p></a></div>
                                    </div>
                                )
                            })}
                            <div className="flex lg:absolute lg:bottom-[15px] z-10 justify-self-end soshobox gap-[20px] lg:gap-[30px] text-[28px] text-white">
                                {mySocialOrderList2.map((items, index) => {

                                    return (
                                        <div key={index} className="mappedsocialsmobile">
                                            <a target='_blank' href={socialLinks[items].link}> <FontAwesomeIcon icon={socialLinks[items].icon} /> </a>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className="absolute bottom-[-170px] right-[-150px] bg-blue-300 h-[370px] w-[370px] rounded-full">

                        </div>

                        <div className="absolute h-[200px] w-[200px] rounded-full bg-teal-300 bg-opacity-[80%] z-0 bottom-[45px] right-[80px]">

                        </div>

                    </div>

                </div>

            </div>


            <div data-aos="fade-up" data-aos-duration="300" className="h-[550px] lg:h-[700px] pad shadow-xl pb-[40px] lg:pb-[100px] overflow-hidden">
                <iframe className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.503167514216!2d38.79848387420257!3d9.01777948916619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859eaf6a53a5%3A0x7717d41abd5534ec!2sPrivate%20Organizations%20Employees&#39;%20Social%20Security%20Administration%20Caf%C3%A9!5e0!3m2!1sen!2ske!4v1696280932547!5m2!1sen!2ske"
                    width="300"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>


        </div>
    );
}

export default ContactComp;