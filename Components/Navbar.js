import Link from 'next/link'

const Navbar = () => {
    return ( 
            <nav className="bg-black py-2">
                <div className="px-10 mx-auto font-bold text-white ">
                    <div className="flex">
                    <ul className="flex space-x-3">
                        <li className="px-4 py-2"><a href="#">Logo</a></li>
                    </ul>
                    <ul className="flex space-x-3 px-7">
                        <Link href='/'><a><li className="hover:text-black hover:bg-amber-500 hover:rounded-3xl transition-all duration-50 ease-linear p-2">HOME</li></a></Link>
                        <Link href="/Products"><a className="hover:text-black hover:bg-amber-500 hover:rounded-3xl transition-all duration-50 ease-linear p-2"><li>SHOP</li></a></Link>
                        <Link href="/about"><a href="#" className="hover:text-black hover:bg-amber-500 hover:rounded-3xl transition-all duration-50 ease-linear p-2"><li>ABOUT</li></a></Link>
                    </ul>
                    <ul className="flex ml-auto py-2">
                    <li><a href="#">Icon</a></li>
                    <li><a href="#">Icon</a></li>
                    <li><a href="#">Icon</a></li>
                    </ul>
                    </div>
                    
                </div>
            </nav>
        
     );
}
 
export default Navbar;