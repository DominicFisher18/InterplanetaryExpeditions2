import React, { useState } from 'react'
import Moon1 from '../src/assets/moon.jpg'
import Mars1 from '../src/assets/mars-image-2.webp'
import AsteroidBelt from '../src/assets/asteroid-belt.webp'
import './App.css'

function Pricing() {
    return(
        <>
            <div className='pb-10'>
                <div className='pt-10 pb-10'>
                    <div className='bg-black flex justify-center md:w-[700px] w-[300px] p-5 mx-auto -skew-x-12 border-4 border-orange-500'>
                        <h1 className='text-3xl md:text-5xl text-white font-bold'>Pricing</h1>
                    </div>
                </div>
                <div className='max-w-[1100px] flex flex-wrap justify-center mx-auto mt-10'>
                    {/* <div className='w-[300px] border-2 shadow-lg'>
                        <div>
                            <img src={Moon1}/>
                            <h1 className='font-bold text-2xl'>The Moon</h1>
                        </div>
                    </div> */}

                    <div className="relative w-[310px] mx-auto border-2 shadow-xl rounded-md mb-2">
                        <img className="h-64 object-cover rounded-md" src={Moon1} alt="Random image"/>

                        <div className=''>
                            <div className='text-center'>
                                <h1 className='font-bold text-4xl mt-3'>The Moon</h1>
                                <h1 className='underline mt-3'>optional add-ons</h1>
                            </div>
                            <div className='ml-5 mt-4'>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>Cockpit Seat</p>
                                </div>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>5 Course Meals</p>
                                </div>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>Spacewalk</p>
                                </div>
                            </div>
                            <h1 className='text-center mt-4 font-bold text-2xl'>Price: $1,300,000</h1>
                            <button className='purchase-btn border-2 p-3 pl-12 pr-12 rounded-xl bg-black text-white font-bold flex mx-auto mt-10 mb-5 text-xl
                                                 hover:bg-opacity-80 ease-in-out duration-300 cursor-pointer'>Purchase</button>
                        </div>
                    </div>

                    <div className="relative w-[310px] mx-auto border-2 shadow-xl rounded-md mb-2">
                        <img className="h-64 object-cover rounded-md" src={Mars1} alt="Random image"/>

                        <div className=''>
                            <div className='text-center'>
                                <h1 className='font-bold text-4xl mt-3'>Mars</h1>
                                <h1 className='underline mt-3'>optional add-ons</h1>
                            </div>
                            <div className='ml-5 mt-4'>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>Cockpit Seat</p>
                                </div>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>5 Course Meals</p>
                                </div>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>Spacewalk</p>
                                </div>
                            </div>
                            <h1 className='text-center mt-4 font-bold text-2xl'>Price: $2,400,000</h1>
                            <button className='border-2 p-3 pl-12 pr-12 rounded-xl bg-black text-white font-bold flex mx-auto mt-10 mb-5 text-xl
                                                hover:bg-opacity-80 ease-in-out duration-300 cursor-pointer'>Purchase</button>
                        </div>
                    </div>

                    <div className="relative w-[310px] mx-auto border-2 shadow-xl rounded-md mb-2">
                        <img className="h-64 object-cover rounded-md" src={AsteroidBelt} alt="Random image"/>

                        <div className=''>
                            <div className='text-center'>
                                <h1 className='font-bold text-4xl mt-3'>Astreroid Belt</h1>
                                <h1 className='underline mt-3'>optional add-ons</h1>
                            </div>
                            <div className='ml-5 mt-4'>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>Cockpit Seat</p>
                                </div>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>5 Course Meals</p>
                                </div>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <p className='ml-3'>Spacewalk</p>
                                </div>
                            </div>
                            <h1 className='text-center mt-4 font-bold text-2xl'>Price: $4,100,000</h1>
                            <button className='border-2 p-3 pl-12 pr-12 rounded-xl bg-black text-white font-bold flex mx-auto mt-10 mb-5 text-xl
                                                hover:bg-opacity-80 ease-in-out duration-300 cursor-pointer'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing