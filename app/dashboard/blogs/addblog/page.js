'use client'

import Addblog from "@/components/dashboard/AddBlog";
import dynamic from "next/dynamic";


function addBlogPage() {

  const Comp = dynamic(()=> import('../../../../components/dashboard/AddBlog'))


  return (
    <div className='addBlogPage'>
      <Comp />
      {/* <Addblog/> */}
    </div>
  );
}

export default addBlogPage;