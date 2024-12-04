import React from 'react'

function Newsletter() {
    return(
        <>
            <div className='bg-black text-white w-full p-20 flex md:flex-row flex-col justify-around'>
                <div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>
                        Want to stay up to date on future deals and trips?+
                    </h1>
                    <p className='mt-2 text-orange-500'>
                        Subscribe to our newsletter to stay in the know!
                    </p>
                </div>
                <div className='mt-5'>
                    <input className='rounded-md p-3 font-bold mr-3 text-black mb-2' placeholder='Enter email'/>
                    <button className='bg-orange-500 p-3 pl-5 pr-5 rounded-md font-bold'>Sign Up!</button>
                </div>
            </div>  
        </>
    )
}

export default Newsletter