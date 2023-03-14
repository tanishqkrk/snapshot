import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <ul className='w-full flex justify-center gap-x-12 max-md:justify-start overflow-x-auto px-3'>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/wallpaper">Wallpapers</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/nature">Nature</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/3d">3D</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/experimental">Experimental</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/animals">Animals</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/fashion">Fashion</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/film">Film</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/food">Food</Link></li>
            <li className=' text-darkBg underline dark:text-lightBg'><Link to="/monuments">Monuments</Link></li>
        </ul>

    )
}

export default Categories