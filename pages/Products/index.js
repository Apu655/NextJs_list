import Link from 'next/Link'

const Products = ({products}) => {
    return ( 
        <div className='min-h-screen bg-gray-200'>
            <h1>Hello</h1>
            {products.map((ninja,key)=>(
                <Link href={'Products/'+ninja.id} key={ninja.id} className='mx-5' >
                    <a >
                         <h3 className=' transition-all duration-50 ease-linear mx-5 hover:border-l-8 border-blue-400 bg-white my-2 p-4

'>{key+1}. {ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export const getStaticProps= async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props:{ products:data}
    }
}
export default Products;