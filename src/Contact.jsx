import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

function Contact() {
    return(
        <>
            <div className='w-full bg-black text-white py-16'>
                <div className='bg-black flex justify-center md:w-[700px] w-[300px] p-5 mx-auto -skew-x-12 border-4 border-orange-500'>
                        <h1 className='text-3xl md:text-5xl font-bold'>Contact</h1>
                </div>
                <div className='max-w-[1400px] grid gap-4 mx-auto md:grid-cols-2 md:gap-8 mt-10'>
                    <div className='ml-5 mr-5'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl'>Reach Out To Us!</h1>
                        <p className='mt-5'>
                            Any questions about our services, pricing, add-ons, staff, or anything else? Don't hesitate to reach out 
                            through our contact tab. Just leave the required info and a message and we will get back to you as soon as possible. 
                            You can also reach us through our information listed below.
                        </p>
                        <div className='flex flex-row mt-10 items-center'>
                            <FaPhoneAlt size={30}/>
                            <p className='ml-5 text-xl font-bold'>+1 999 999 9999</p>
                        </div>
                        <div className='flex flex-row mt-5 items-center'>
                            <MdEmail size={30}/>
                            <p className='ml-5 sm:text-xl font-bold '>planetexpeditions@gmail.com</p>
                        </div>
                        <div className='flex flex-row mt-5 items-center'>
                            <FaFacebook size={30}/>
                            <p className='ml-5 text-xl font-bold'>Our Facebook</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center border-2 border-orange-500 p-5 mr-5 ml-5'>
                        <input type='text' placeholder='name (first and last)' className='rounded-3xl p-2 mb-2 text-black'/>
                        <input type='text' placeholder='email' className='rounded-3xl p-2 mb-2 text-black'/>
                        <textarea placeholder='leave a message!' cols={30} rows={10} className='p-2 mb-2 text-black'/>
                        <button className='border-2 border-orange-500 mx-auto p-3 pl-12 pr-12 font-bold text-xl hover:border-black ease-in-out duration-300'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact