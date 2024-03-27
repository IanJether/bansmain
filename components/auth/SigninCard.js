import { auth } from "@/db/config";
import { AllContext } from "@/states/context";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";


function SigninCard() {

    const {triggerNotification} = useContext(AllContext)

    const router = useRouter()

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitUser = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                triggerNotification('success', 'Signin Successfull')


                router.push('/dashboard/blogs')

            })
            .catch((error) => {
                
                triggerNotification('error', error.code)
                console.log(error)
                // alert('')

                
            });

    }

    return (
        <div className='SigninCard flex flex-col w-full lg:w-[70%] gap-[30px]'>

            <div className="flex flex-col text-center lg:text-left">
                <h2 className="text-[33px] font-semibold text-primary">Welcome Back!</h2>
                <h3 className="text-gray-500 font-semibold text-[14px] ">Please log in to your account.</h3>
            </div>

            <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[8px]">
                    <label className="loginlabel" htmlFor="">Email Address</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="loginInput" type="text" />
                </div>

                <div className="flex flex-col gap-[8px]">
                    <label className="loginlabel" htmlFor="">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className="loginInput" type="password" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-[6px] items-center">
                    <input type="checkbox" />
                    <p className="text-[14px] font-semibold">Remember me</p>
                </div>
                <p className="text-[14px] text-primary font-semibold">Forgot Password ?</p>
            </div>

          <div className="flex items-center justify-between">
                <button onClick={()=>submitUser()} className="h-[55px] text-[14px] bg-sec text-white font-semibold w-[45%] rr">Login</button>
                <button className="h-[54px] text-[14px] bg-white text-sec font-semibold w-[45%] rr border-[2px] border-sec">Create Account</button>
            </div>


        </div>
    );
}

export default SigninCard;