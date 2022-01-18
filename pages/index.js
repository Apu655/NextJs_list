import Head from 'next/head'
import Footer from '../Components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/Image'
export default function Home() {
  return (
    <>
    <Head>
      <title>MyList | Home</title>
      <meta name='keywords' content="Mylist"></meta>
    </Head>
    <div>
      <div className="flex items-center justify-center min-h-screen">
      <div className="">
        <Image src="/homedecor1.jpg" width ={1300} height={800}></Image>
      </div>
      <h2>Hello World</h2>
      </div>
      
      
    </div>
    </>
  )
}
