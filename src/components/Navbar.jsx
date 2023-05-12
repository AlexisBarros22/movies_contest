import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import React from 'react'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
          <Link to="/">Movies Contest</Link>
        </h2>
        <Link to="/contest/1">
            <BiCameraMovie/>
                Contest
        </Link>
        <form>
            <input type='text' placeholder='Search for a movie' />
            <button type='submit'>
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
  )
}

export default Navbar