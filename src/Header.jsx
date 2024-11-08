import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import BackgroundImg from '../src/assets/mars-background.jpg'

function Header() {

    const [nav, setNav] = useState(true)

    const changeNav = () => {
        setNav(!nav)
    }

    return(
        <>
            <div className='flex flex-row justify-around items-center bg-black text-white z-50 h-24 mx-auto'>
                <div className='flex items-center'>
                    <AiOutlineRocket size={40} className='rotate-45'/>
                    <h1 className='font-bold md:text-3xl text-2xl pl-2'>Interplanetary Expeditions</h1>
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Home</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>About</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Teams</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Trips</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div onClick={changeNav} className='md:hidden'>
                    {nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-black ease-in-out duration-500' :
                                        'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-black'}>
                    <h1 className='font-bold p-4 text-2xl'>Interplanetary Expeditions</h1>
                    <ul className='md:flex'>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Home</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>About</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Teams</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Trips</li>
                        <li className='p-4 text-xl hover:text-orange-500 ease-in-out duration-300 cursor-pointer border-b border-orange-500 mr-3'>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header