import Image from "next/image";
import Header from "./common/Header";
import Stats from "@/data/stats";
import { servicesList } from "@/data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



function AboutComp() {
  return (
    <div className='AboutComp'>

      <Header page="About" pagehead="About us" />


      {/* section one  */}

      <div className="sectiontwo flex flex-col lg:flex-row items-center gap-[50px] pad pt-[50px] lg:py-[100px]">

        <div className="h-[300px] overflow-hidden w-full lg:h-[55vh] lg:w-[50%] rr">
          <Image className="h-full w-full object-cover" height={2000} width={2000} src="/images/ab2.jpg" />
        </div>

        <div className="flex flex-col lg:w-[50%] gap-[15px] lg:gap-[20px]">
          <h3 className="font-bold text-[16px] uppercase mb-[-20px] text-gray-700">what are we</h3>
          <h2 className="font-semibold text-[28px]"><span className="text-primary"> Our </span> Mission</h2>
          <p className="text-neutral-600">Our mission at African Air Medical is to be a steadfast beacon of hope and support during life's most critical moments.  </p>
          <p className="text-neutral-600">We are committed to providing swift and reliable air evacuation services, ensuring the safety and well-being of individuals facing emergencies. Our dedicated team of professionals is driven by the belief that every life is precious, and we strive to make a positive impact by offering unparalleled expertise and assistance when it is needed the most. </p>
          {/* <p className="text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur ipsa error, provident id temporibus quae corporis nostrum voluptatem, vel omnis tempora deserunt fuga? Vel voluptatum impedit iure debitis beatae.</p> */}
          {/* <button className="button1 w-[200px] mt-[10px]">Learn more <FontAwesomeIcon icon={faArrowRight} /></button> */}

          <div className="flex flex-col lg:flex-row lg:justify-between mt-[5px] gap-[15px] lg:gap-[25px]">
            {Stats.map((items, index) => {

              return (
                <div key={index} className="mappedStat flex flex-col lg:items-center gap-[px]">
                  <p className="font-bold text-[35px]">{items.number}</p>
                  <p className="font-semibold text-[18px]">{items.name}</p>
                </div>
              )
            })}
          </div>
        </div>



      </div>

      {/* section two  */}

      <div className="sectiontwo flex flex-col-reverse lg:flex-row items-center gap-[50px] pad py-[50px] lg:pb-[150px]">


        <div className="flex flex-col lg:w-[50%] gap-[15px] lg:gap-[20px]">
          <h3 className="font-bold text-[16px] uppercase mb-[-20px] text-gray-700">what are we</h3>
          <h2 className="font-semibold text-[28px]"><span className="text-primary"> Our </span> Vision</h2>
          <p className="text-neutral-600">Our vision at African Air Medical is to be the premier provider of comprehensive air evacuation solutions worldwide. </p>
          <p className="text-neutral-600">We aspire to continuously enhance our fleet, technology, and expertise to set new benchmarks in emergency response. Beyond responding to crises, we envision actively shaping a safer world by investing in community education and empowerment. </p>
          <p className="text-neutral-600">We strive to be recognized not only for our operational excellence but also for our enduring commitment to making a positive impact on the communities we serve. We foster strategic partnerships and leveraging innovative approaches, we aim to create a global network that prioritizes human safety and well-being. </p>
          {/* <button className="button1 w-[200px] mt-[10px]">Learn more <FontAwesomeIcon icon={faArrowRight} /></button> */}

        </div>

        <div className="h-[300px] overflow-hidden w-full lg:h-[55vh] lg:w-[50%] rr bg-gray-700">
          <Image className="h-full w-full object-cover" height={2000} width={2000} src="/images/ab3.jpg" />
        </div>



      </div>

      {/* section three  */}

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


    </div>
  );
}

export default AboutComp;