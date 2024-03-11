
import NavDashComp from "./Navdash";



function MainDash({children}) {
    return (
        <div className='MainDash lg:flex'>

            <div className="w-[260px] shrink-0">
                <NavDashComp />
            </div>

            <div className="w-[100%] bg-gray-100 p-[40px]">
                {children}
            </div>

        </div>
    );
}

export default MainDash;