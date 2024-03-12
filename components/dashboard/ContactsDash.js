import MainDash from "./common/MainDash";



function ContactsDash() {
    return (
        <MainDash>
            <div className='ContactsDash overflow-scroll no-scrollbar h-[88vh]'>
                {/* <div className="flex justify-between items-center h-[60px]">
                    <h2 className="text-[24px] w-[200px] font-semibold text-primary">Contact details</h2>

                </div> */}


                <div className="bg-white rr w-full h-[280px] mt-[15px] p-[20px] shadow-sm">

                    <h3 className="font-semibold text-primary text-[20px]"> <span className="text-sec">Company</span> Contacts</h3>

                    <div className="flex justify-between gap-[25px] mt-[22px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Phone Number</label>
                            <input value='0712345678' className="inputContact" type="text" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Email Address</label>
                            <input value="info@bansprotection.co.ke" className="inputContact" type="text" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Location ( Maps )</label>
                            <input value="GTC Building, 1st Floor, Room A21" className="inputContact" type="text" />
                            <input value="https://maps.app.goo.gl/tNAbTj7NDZp9kuKF6" className="inputContact" type="text" />
                        </div>
                    </div>


                </div>

                <div className="mt-[20px] rr bg-white w-full h-[430px] p-[25px] shadow-sm">
                    <h3 className="font-semibold text-primary text-[20px]"> <span className="text-sec">Social</span> Links</h3>

                    <div className="flex justify-between gap-[25px] mt-[20px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Facebook</label>
                            <input value='@bansprotection' className="inputContact" type="text" />
                            <input value='facebook.com/bansprotection/wfdsfg' className="inputContact" type="text" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Twitter</label>
                            <input value="@bansprotection" className="inputContact" type="text" />
                            <input value="x.com/bansprotection/sdfvw" className="inputContact" type="text" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Instagram</label>
                            <input value="@bans_protection" className="inputContact" type="text" />
                            <input value="instagram.com/bans_protection/wdfsd" className="inputContact" type="text" />
                        </div>
                    </div>
                    <div className="flex justify-between gap-[25px] mt-[22px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Linkedin</label>
                            <input value='@bansprotectionke' className="inputContact" type="text" />
                            <input value='linkedin.com/bansprotection/wfdsfg' className="inputContact" type="text" />
                        </div>
                        <div className="flex flex-col w-full">
                           
                        </div>
                        <div className="flex flex-col w-full">
                           
                        </div>
                      
                    </div>

                </div>


                <div className="mt-[20px] rr bg-white w-full h-[480px] p-[25px] shadow-sm">
                    <h3 className="font-semibold text-primary text-[20px]"> <span className="text-sec">Contact</span> Person</h3>

                    <div className="h-[140px] w-[140px] bg-gray-100 rounded-full mt-[20px] shadow-sm">

                    </div>

                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Name (s)</label>
                            <input value='Benson Ouda' className="inputContact" type="text" />
                          
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Position</label>
                            <input value="Managing Director" className="inputContact" type="text" />
                          
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Email</label>
                            <input value="ben@bansprotection.co.ke" className="inputContact" type="text" />
                          
                        </div>
                    </div>

                    <div className="flex justify-between gap-[25px] mt-[25px]">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-neutral-600" htmlFor="">Phone</label>
                            <input value='0712345678' className="inputContact" type="text" />
                          
                        </div>
                        <div className="flex flex-col w-full">
                          
                          
                        </div>
                        <div className="flex flex-col w-full">
                           
                          
                        </div>
                    </div>

                   

                </div>



            </div>
        </MainDash>
    );
}

export default ContactsDash;