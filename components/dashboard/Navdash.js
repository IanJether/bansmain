'use client'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useState } from "react";
import ConfirmationBox from "../common/ConfirmBox";
import { dashboardList } from "@/data/dashboardList";
// import ConfirmationBox from "../commons/ConfirmBox";


function NavDashComp() {

  const [showConfirmation, setShowConfirmation] = useState(false);

  
  const handleCancel = () => {

    setShowConfirmation(false);
}

const handleDelete = () => {

    setShowConfirmation(true);

}

const deleteClick = () => {

    const storageref = ref(storage, details.imageURL)

    deleteObject(storageref).then(() => {
    
        deleteDoc(doc(db, "trialone", details.id)).then((() => {
            // alert("deleted")
        }))

    })

    setShowConfirmation(false);
    setActiveElementWork("Details")

}

  return (
    <div className='NavDashComp hidden lg:block bg-white shadow-md relative z-20 lg:w-[13vw] bg-blac lg:h-[100vh] border-r'>

      <div className="bg-stone-50 w-full h-[10vh] flex items-center justify-center">
        <h3 className="font-semibold">FRANK ART</h3>
      </div>
      <div className="flex flex-col h-[90vh] items-start px-[10px] justify-center mt-[-100px] gap-[20px]">
        {dashboardList.map((items, index) => {



          return (
            <Link href={items.link} >   <div className="mappednavDash flex items-center gap-[10px] flex transition ease-in-out duration-500">

              <FontAwesomeIcon className="w-[35px] h-[35px] text-[16px]" icon={items.icon} />

              <h2 onClick={items.function} className="capitalize w-[70px] font-semibold hover:ml-[10px] transition ease-in-out duration-500">{items.name}</h2>

            </div> </Link>
          )
        })}

      </div>

      {showConfirmation && (
                <ConfirmationBox
                    onConfirm={deleteClick}
                    onCancel={handleCancel}
                    message="Confirm Log Out ?"
                />
            )}
    </div>
  );
}

export default NavDashComp;