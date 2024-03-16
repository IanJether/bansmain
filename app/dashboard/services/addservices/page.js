'use client'

import AddServiceDash from "@/components/dashboard/AddService";
import dynamic from "next/dynamic";


function addServicesPage() {

  const Comp = dynamic(()=> import('../../../../components/dashboard/AddService'))

  return (
    <div className='addServicesPage'>
      <Comp/>
    </div>
  );
}

export default addServicesPage;