

import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'
import Footer from '@/components/common/Footer'
import { usePathname } from 'next/navigation'
import { AllContext, AllContextProvider } from '@/states/context'
import Image from 'next/image'
import { useContext } from 'react'


// import Navbar from '@/common/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bans Protection',
  description: 'Protection Agency',
}

export default function RootLayout({ children }) {

  


  return (
    <AllContextProvider>
      <html lang="en">
      
        <body className={` ${inter.className}`}>
          <Navbar />
          <div className="">
            {children}
          </div>


          <Footer />

        </body>

      </html>
    </AllContextProvider>
  )
}


// npx tailwindcss -i ./app/globals.css -o ./app/output.css --watch