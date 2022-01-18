import Navbar from "../Components/Navbar";
import Head from "next/head"
const About = () => {
    return ( 
        <>
        <Head>
            <title>My List | About</title>
        </Head>
        <div className='min-h-screen'>
            <h1 className='hover:bg-gray-500'>This is About</h1>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
        </div>
        </>
     )
}
 
export default About;