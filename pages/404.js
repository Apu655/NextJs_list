import Link from "next/link";
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const Error = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            //router.go(-1)
            router.push('/');

        },3000)
    },[])
    return (
        <div >
            <div className="min-h-screen ">
            <div className="w-3/4 mx-auto mt-20 min-h-screen">
            <h1>Oooops......</h1>
            <h2>That page is not found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
            </div>
        </div>
      );
}
 
export default Error;