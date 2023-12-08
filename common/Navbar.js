import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navbar=()=> {
    return (
        <div className='Navbar'>
            {/* mobile navbar  */}

            {/* <div className="mobilenav fixed top-[0px] w-[100vw]">

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

                <div className="flex justify-between items-center pad h-[55px] shadow-md">

                    <div className="font-semibold">
                        <h2>LOGO</h2>
                    </div>
                    <div className="text-[18px]">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                </div>

            </div> */}
        </div>
    );
}

export default Navbar;