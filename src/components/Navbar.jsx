import { useState } from "react"
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
        <div className="text-neutral-400 bg-black/60
        backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex rounded-xl
        justify-between border border-blue-900 ">
            <img src={logo} alt="logo" width={120} height={24}/>

            <div className="hidden md:flex space-x-6 mt-2">
                <a href="#works" className="hover:text-neutral-200">
                    How it works
                </a>
                <a href="#pricing" className="hover:text-neutral-200">
                    Pricing
                </a>
                <a href="#testimonials" className="hover:text-neutral-200">
                    Testimonials
                </a>
            </div>

            {/* right: buttons hidden on mobile */}
            <div className="hidden md:flex space-x-4 items-center">
                <a href="#" className="hover:text-neutral-200 text-neutral-100">
                    Login
                </a>
                <a href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
                    Get a Demo
                </a>
                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                    Start a Free Trail
                </a>
            </div>

            {/* #Hamburger */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none" area-label={isOpen ? "Close Menu" : "Open Menu"}>
                    {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                </button>
            </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-neutral-900/60 backdrop-blur-sm border 
            border-neutral-800 p-4 rounded-xl mt-2">
                <div className="flex flex-col space-y-4">
                    <a href="#" className="hover:text-neutral-200">Product</a>
                    <a href="#" className="hover:text-neutral-200">Pricing</a>
                    <a href="#" className="hover: text-neutral-200">Resources</a>
                    <a href="#" className="hover: text-white">Login</a>
                    <a href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
                    Get a Demo
                    </a>
                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                    Start a Free Trail
                    </a>
                </div>

            </div>
        )}
    </nav>
  )
}

export default Navbar
