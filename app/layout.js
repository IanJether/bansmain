import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'
import Footer from '@/components/common/Footer'
import { usePathname } from 'next/navigation'
import { AllContextProvider } from '@/states/context'


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
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
        </Head>
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