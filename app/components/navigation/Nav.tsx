import Link from "next/link"
import ButtonBlue from "../buttons/ButtonBlue"

const Nav = () => {
  return (
    <div className="h-[12vh] bg-white shadow-md">
        <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
            <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
                <span className="text-[27px] md:text-[40px] text-red-600">W</span>
                ebdev.
            </h1>
            <ul className="hidden lg:flex items-center space-x-10">
                <li className="text-[17px] cursor-pointer text-red-500">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[17px] cursor-pointer  transition-all duration-200">
                    <Link href="/">About</Link>
                </li>
                <li className="text-[17px] cursor-pointer  transition-all duration-200">
                    <Link href="/">Services</Link>
                </li>
                <li className="text-[17px] cursor-pointer  transition-all duration-200">
                    <Link href="/">Costumer</Link>
                </li>
                <li className="text-[17px] cursor-pointer  transition-all duration-200">
                    <Link href="/">Blog</Link>
                </li>
            </ul>
            <div className="flex items-center space-x-2 md:spacex-5">
                <ButtonBlue text="Login"/>

            </div>
        </div>
        
    </div>
  )
}

export default Nav