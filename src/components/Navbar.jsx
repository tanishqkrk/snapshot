import React, { useEffect } from 'react'
import Searchbar from './Searchbar'
import { useState } from 'react'
import Categories from './Categories'
import { Link } from 'react-router-dom'
const Navbar = ({ setDarkToggle, setSearchQuery }) => {

    const [darkTheme, setDarkTheme] = useState(true);
    useEffect(() => {
        setDarkToggle(darkTheme)
    }, [darkTheme])

    return (
        <div className='fixed top-0 z-10  flex flex-col justify-center w-full py-3  gap-y-3 backdrop-blur-xl bg-opacity-40 bg-lightBg dark:bg-darkBg dark:backdrop-blur-xl dark:bg-opacity-20'>
            <div className='flex w-full justify-center  gap-x-12'>
                <Link to="/" className="text-3xl font-bold w-fit text-darkBg dark:text-lightBg">Snapshot</Link>
                <Searchbar setSearchQuery={setSearchQuery} />
                <div className='1/4 flex justify-center items-center'>
                    <button onClick={() => setDarkTheme((prev) => !prev)} className='shadow-md p-1 rounded-md bg-darkBg text-lightBg dark:bg-lightBg dark:text-darkBg' htmlFor="">{!darkTheme ? "🌙" : "☀️"}</button>
                </div>
                <div className="flex flex-col 1/4 ">
                    <div className="flex justify-center items-center h-full">
                        <i className="fa-solid fa-user text-darkBg text-2xl dark:text-lightBg"></i>
                    </div>
                </div>
            </div>
            <Categories />

        </div >
    )
}

export default Navbar