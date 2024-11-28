import React, { useState } from 'react'
import Mars from '../src/assets/mars-image-2.webp'

function About() {
    return(
        <>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1400px] grid lg:grid-cols-2 mx-auto'>
                    <img className='w-[400px] md:w-[500px] mx-auto center' src={Mars}/>
                    <div className='flex flex-col justify-center text-center mt-6 lg:mt-0'>
                        <div className='border-b-2 border-orange-500 mx-auto mb-5'>
                            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Our Story</h1>
                        </div>
                        <p className='font-bold mr-5 ml-5'>
                            When NASA first successfully sent humans to Mars back in 2034, the cosmic floodgates were opened and the passion
                            for space exploration was reborn in our species.  On board this mission was astronaut Harry Potter, who would go
                            on to found Interplanetary Expeditions two decades later.  Mr. Potter was enamored by the beauty of space and of Mars,
                            and wished to share the same experience with everyone else.  With the help of modern day technology, space travel has become
                            safer and easier than ever before.  Our goal is to provide you with the best possible experience money can buy, and memories
                            that will last a lifetime.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About