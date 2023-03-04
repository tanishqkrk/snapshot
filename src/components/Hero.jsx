import React from 'react'
import Searchbar from './Searchbar'
import { useEffect, useState } from 'react'


// https://api.unsplash.com/photos/random/?client_id=Xkhv6_V5vL4TSH-ZPclJ_S7SqnJxWL1LELDQusZLvVs
const Hero = () => {
    // const [randomBg, setRandomBg] = useState("")


    return (
        <div className='flex flex-col justify-center items-center h-[80vh] gap-y-5 relative '>
            <img src={"https://images.unsplash.com/photo-1677618031630-768ddc4f4fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"} className="w-full h-full object-cover brightness-50" alt="" />
            <div className='absolute flex flex-col items-center justify-center gap-y-5'>
                <h1 className='font-bold text-lightBg text-5xl'>Get high quality images by creators</h1>
                <p className='font-bold text-lightBg text-xl'>Over 2M+ images</p>
                {/* <Searchbar /> */}
            </div>
        </div>
    )
}

export default Hero