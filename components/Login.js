

'use client'


import { auth, db } from "@/db/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { collection } from "firebase/firestore"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import SigninCard from "./auth/SigninCard"
import Link from "next/link"


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


                router.push('/dashboard')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert('Invalid Credentials')
            });

    }


    return (
        <div className='Signin lg:h-screen flex flex-col-reverse  lg:flex-row p-[30px]'>

            <div className="lg:w-[50%] w-full flex flex-col gap-[0px] pad lg:h-full">

                <div className="lg:h-[13%] hidden  lg:flex items-center">
                    <Link href="/"> <Image className="h-[100px] w-[110px] object-contain " height={2000} width={2000} src="/images/logoone.png" alt="" /> </Link>
                </div>

                <div className="lg:h-[74%] mt-[20px] lg:mt-[0] flex items-center w-full">
                    <SigninCard />
                </div>

                <div className="lg:h-[13%] mt-[36px] lg:mt-[0] text-center lg:text-left flex flex-col gap-[0px] justify-center text-[12px] font-semibold text-gray-500">
                    <p>By Sign Up you agree to our <Link className="text-gray-900 hover:underline" href="">Terms and Conditions</Link></p>
                    <p> &copy; Bans Protection Services 2024</p>
                </div>

            </div>

            <div className="lg:w-[50%] h-[200px] lg:h-full">
                <Image priority className="h-full filter rr brightness-[70%] w-full object-cover" height={2500} width={2500} src="/images/one.jpg" alt="" />
            </div>



        </div>
    );
}

export default Login;