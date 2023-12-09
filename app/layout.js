import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'
import Navbar from '@/common/Navbar'
// import Navbar from '@/common/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bans Protection',
  description: 'Protection Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <div className=' mt-[85px] lg:mt-[10vh]'>
          {children}
        </div>
        {/* <Navbar/> */}

      </body>
      {/* <Navbar/> */}
    </html>
  )
}


// npx tailwindcss -i ./app/globals.css -o ./app/output.css --watch