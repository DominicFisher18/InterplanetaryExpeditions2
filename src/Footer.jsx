import React from 'react'
import { AiOutlineRocket } from "react-icons/ai";

function Footer() {
    return(
        <>
            <div className='w-full'>
                <div>
                    <div className='flex flex-row justify-center items-center mt-5'>
                        <AiOutlineRocket size={40} className='rocket-img rotate-45'/>
                        <h2 className='title font-bold md:text-3xl text-xl font-serif'>Interplanetary Expeditions</h2>
                    </div>
                    <div className='flex flex-row justify-around max-w-[300px] mx-auto mt-3 mb-5'>
                        <p className='underline font-bold'>Privacy Policy</p>
                        <p className='underline font-bold'>Office Info</p>
                        <p className='underline font-bold'>Security</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer