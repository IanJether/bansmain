

import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { AllContextProvider } from '@/states/context'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic'
import Notification from '@/components/common/Notification'
import 'animate.css';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bans Protection',
  description: 'Protection Agency',
}

export default function RootLayout({ children }) {

  // const NotificationElement = dynamic(()=> import('../components/common/Notification'),{
  //   ssr: false,
  // })





  return (
    <AllContextProvider>
      <html lang="en">

        <body className={` relative ${inter.className}`}>
          <Navbar />
          <div className="">
            {children}
          </div>
          <Notification/>

          <Footer />

        </body>

      </html>
    </AllContextProvider>
  )
}


// npx tailwindcss -i ./app/globals.css -o ./app/output.css --watch