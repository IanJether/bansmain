

'use client'


import { auth, db } from "@/db/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { collection } from "firebase/firestore"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const colRef = collection(db, `users`)


    const submitUser = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;


                router.push('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert('Invalid Credentials')
            });

    }


    return (
        <div className='Signin topspace'>

            <div className="h-[600px] lg:h-[90vh] w-full relative">


                <Image className="h-full w-full z-30" height={1000} width={1000} src="/images/backgrounds/wave.svg" alt="" />

                <div className="sectiononelogin z-10 absolute bg-gray-100 flex items-center justify-center h-full w-full top-[0px] ">

                    <div className="logincard  bg-white rounded-[5px] flex flex-col gap-[10px] p-[40px] w-[80%] lg:w-[400px]  border shadow-md">

                        {/* <h2 className="font-semibold capitalize text-center text-[24px] text-blue-500">Welcome Back</h2> */}
                        <label className="labellogin" htmlFor="">Email Address</label>
                        <input className="inputlogin" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label className="labellogin" htmlFor="">Password</label>
                        <input className="inputlogin" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <p className="text-orange-500 text-[13px] text-center hover:underline cursor-pointer">Forgot password ?</p>
                        <button onClick={submitUser} className="bg-orange-500 mx-auto text-white w-[170px] h-[50px] rounded-[5px]  mt-[5px]">Sign in</button>

                    </div>

                </div>


            </div>


        </div>
    );
}

export default Login;