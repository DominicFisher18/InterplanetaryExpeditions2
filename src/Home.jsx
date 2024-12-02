import React, { useState } from 'react'
import BackgroundImg from '../src/assets/mars-background.jpg'
import { ReactTyped } from "react-typed";


function Home() {

    return(
        <>
            <div className='flex flex-col justify-center text-center' style={{background: `url(${BackgroundImg})`,
                        repeat: 'no-repeat',
                        // width: '100%',
                        // height: '100%',
                        height: '100vh',
                        backgroundSize: 'cover',
                        position: 'center',
                        position2: 'fixed',
                        index: 'z-10'}}>
                <h1 className='title-text text-white lg:text-5xl md:text-4xl text-3xl mx-auto'>Your Journey Beyond Our World</h1>
                {/* <h1 className='text-white text-5xl mx-auto mt-2'>Starts Here.</h1> */}
                <div className='flex flex-row justify-center align-middle mx-auto lg:text-5xl md:text-4xl text-3xl mt-3'>
                    <h1 className='text-white mr-1'>Starts</h1>
                    <ReactTyped className='text-white ml-1'
                            strings={['Today.', 'Here.', 'Now.']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop/>
                </div>
                <button className='text-white text-2xl border-2 border-white mx-auto mt-10 p-4 pl-9 pr-9 -skew-x-12 hover:ease-in-out duration-300 hover:bg-white hover:text-black z-0'>Start Journey</button>
            </div>
            
        </> 
    )
    
}

export default Home