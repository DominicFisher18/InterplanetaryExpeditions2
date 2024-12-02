import React, { useState } from 'react'
import Astronaut1 from '../src/assets/astronaut2.jpeg'
import Astronaut2 from '../src/assets/astronaut3.jpg'
import Astronaut3 from '../src/assets/astronaut4.jpg'

function Crew() {
    return(
        <>
            <div className='bg-gray-100 pt-10 pb-20'>
                <div className='bg-black flex justify-center md:w-[700px] w-[300px] p-5 mx-auto -skew-x-12 border-4 border-orange-500'>
                    <h1 className='text-3xl md:text-5xl text-white font-bold'>Meet The Crew</h1>
                </div>
                <div className='max-w-[1000px] flex flex-wrap justify-center mx-auto gap-8 mt-20'>
                    <div className='w-[300px] border-2 shadow-lg'>
                        <div>
                            <img className='h-[400px]' src={Astronaut1}/>
                        </div>
                        <div className='p-2 pb-2'>
                            <h2 className='text-center font-bold text-2xl pt-5'>Michael Armstrong</h2>
                            <p className='pl-2 pr-2 pt-5 pb-5 text-center'>Michael is our most experienced astronaut, and the head of our team.
                            In total he has manned 14 missons into space.</p>
                        </div>
                    </div>
                    <div className='w-[300px] border-2 shadow-lg'>
                        <div>
                            <img className='h-[400px]' src={Astronaut2}/>
                        </div>
                        <div className='p-2'>
                            <h2 className='text-center font-bold text-2xl pt-5'>John Jacobs II</h2>
                            <p className='pl-2 pr-2 pt-5 pb-5 text-center'>Mr. Jacobs is our second most experienced astronaut, and has been studying under Albus for almost
                            a decade now.  In total he has been apart of 9 missions into space.</p>
                        </div>
                    </div>
                    <div className='w-[300px] border-2 shadow-lg'>
                        <div>
                            <img className='h-[400px]' src={Astronaut3}/>
                        </div>
                        <div className='p-2'>
                            <h2 className='text-center font-bold text-2xl pt-5'>Arthur Mostert</h2>
                            <p className='pl-2 pr-2 pt-5 pb-5 text-center'>Arthur is the newest member of our crew, but is one of the brightest minds
                            that you'll ever meet.  In total he has been apart of 4 missions into space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crew