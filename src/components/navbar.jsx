import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <div className="navbar">
            <NavLink to='/category/top_rated' >Top rated</NavLink>
            <NavLink to='/category/upcoming' >Upcoming</NavLink>
            <NavLink to='/category/popular' >Popular</NavLink>
            {/* <NavLink to='/sdcsr/' >404</NavLink>
            <NavLink to='/movie/15' >details</NavLink> */}
        </div>
    )
}

export default Navbar;