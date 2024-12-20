import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import './App.css'
import { HashLink as Link } from 'react-router-hash-link';


function Header() {

    const [nav, setNav] = useState(true)
    const [navColor, setNavColor] = useState(false)

    const changeNav = () => {
        setNav(!nav)
    }

    const changeColor = () => {
        if (window.scrollY >= 8) {
            setNavColor(true)
        } else {
            setNavColor(false) 
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <>
            <div className={navColor ? 'flex flex-row justify-around items-center bg-black text-white fixed top-0 w-full pt-4 pb-4 z-10' :
                                        'flex flex-row justify-around items-center text-white mx-auto fixed top-0 w-full pt-4 pb-4'}>
                <div className='flex items-center'>
                    <AiOutlineRocket size={40} className='rocket-img rotate-45'/>
                    <h1 className='title font-bold md:text-3xl text-2xl font-serif'>Interplanetary Expeditions</h1>
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>
                            <Link to="#home">
                                Home
                            </Link>
                        </li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>
                            <Link to="#about">
                                About
                            </Link>
                        </li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>
                            <Link to="#crew">
                                Team
                            </Link>
                        </li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>
                            <Link to="#pricing">
                                Trips
                            </Link>
                        </li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>
                            <Link to="#contact">
                                Contact
                            </Link>
                        </li>
                        {/* <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>About</li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Team</li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Pricing</li>
                        <li className='lg:p-4 md:p-3 text-xl lg:text-2xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Contact</li> */}
                    </ul>
                </div>
                <div onClick={changeNav} className=' hamburger md:hidden'>
                    {nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-black ease-in-out duration-500 z-10' :
                                        'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-black z-10'}>
                    <h1 className='font-bold p-4 text-2xl'>Interplanetary Expeditions</h1>
                    <ul className='md:flex'>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>
                            <Link to="#home" onClick={changeNav}>
                                Home
                            </Link>
                        </li>
                        <li to="#about" onClick={changeNav} className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>
                            <Link to="#about">
                                About
                            </Link>
                        </li>
                        <li to="#crew" onClick={changeNav} className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>
                            <Link to="#crew">
                                Team
                            </Link>
                        </li>
                        <li to="#pricing" onClick={changeNav} className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>
                            <Link to="#pricing">
                                Trips
                            </Link>
                        </li>
                        <li to="#contact" onClick={changeNav} className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>
                            <Link to="#contact">
                                Contact
                            </Link>
                        </li>
                        {/* <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Home</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>About</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Team</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Pricing</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Contact</li> */}
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Header