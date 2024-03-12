import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDash from "./common/MainDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BlogsList } from "@/data/blogs";
import { servicesList } from "@/data/services";


function ServicesDash() {
  return (
    <MainDash>
      <div className='ServicesDash'>

        <div className="flex justify-between items-center">
          <h2 className="text-[24px] w-[200px] font-semibold text-primary">All Services</h2>


          <div className="h-[40px] shadow-sm flex  items-center justfiy-between rounded-full
                     border border-gray-200 w-[370px] shadow-md px-[15px] text-[14px] bg-white">
            <input className="h-full w-full outline-none" type="text" placeholder="Search services here... " />
            {/* <Image className="h-[50%] w-[60px] " height={600} width={600} src="/images/icons/search.svg" alt="" /> */}
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>


          <button className="button1 w-[200px]">Add New Service</button>
        </div>

        <div className=" h-[78vh] border-b-[1px]  pb-[50px] w-full rr mt-[25px] overflow-scroll no-scrollbar">

          <div className=" flex flex-wrap gap-[2.6vw]">
            {servicesList.map((items, index) => {

              return (
                <div key={index} className="w-[31%] p-[20px] shadow-md border bg-white rr">
                  <div className="bg-gray-100 h-[250px] rr">

                  </div>

                
                  <h2 className="font-semibold mt-[10px] text-[18px] text-primary">{items.name}</h2>

                  {/* <p className="font-semibold text-[15px] text-sec mt-[10px]">By {items.author}</p> */}

                </div>
              )
            })}

          </div>

        </div>

      </div>
    </MainDash>
  );
}

export default ServicesDash;