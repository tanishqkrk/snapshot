import React from 'react'
import { useState, useEffect } from 'react'
const Searchbar = ({ setSearchQuery }) => {

    const [input, setInput] = useState("");
    useEffect(() => {
        setSearchQuery(input)
    }, [input])
    return (
        <label className="relative block  w-2/4 max-md:w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <i className="fa-solid fa-magnifying-glass text-gray-200 "></i>
            </span>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border broder-darkBg rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
        </label>
    )
}

export default Searchbar