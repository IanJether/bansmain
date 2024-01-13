import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";



const Header = ({ page, pagehead }) => {


    return (
        <div className="abzeero h-[150px] lg:h-[250px] overflow-hidden relative">
            <div className="h-[150px] lg:h-[250px]">

                <Image priority className="object-cover lg:hidden  h-[150px] lg:h-[250px] w-full filter brightness-[44%]" width={1200} height={1200} src="/images/four.jpg" alt={`${pagehead} MGA Tax Consulting in Nairobi Kenya`} />
                <Image priority className="object-cover hidden lg:block  h-[150px] lg:h-[250px] w-full filter brightness-[44%]" width={1200} height={1200} src="/images/four.jpg" alt={`${pagehead} MGA Tax Consulting in Nairobi Kenya`} />
            </div>
            <div className="aboutrel absolute top-[1px] h-[150px] lg:h-[250px] flex flex-col justify-center items-center w-[98vw]">
                <div>
                    <h2 className="text-white text-center font-bold text-[19px] uppercase">{pagehead}</h2>
                </div>
                <div>
                    <p className="text-white text-center mt-[10px] text-[15px]">Home <span className="text-[15px] mx-[10px] text-primary"> <FontAwesomeIcon icon={faAngleRight} /></span> {page} </p>
                </div>
            </div>
        </div>
    )
}

export default Header;