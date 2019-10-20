import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {

    return (
        <div className="navbar">
            <NavLink key={1} to='/category/top_rated' >Top rated</NavLink>
            <NavLink key={2} to='/category/upcoming' >Upcoming</NavLink>
            <NavLink key={3} to='/category/popular' >Popular</NavLink>
            {/* <NavLink to='/sdcsr/' >404</NavLink>
            <NavLink to='/movie/15' >details</NavLink> */}
        </div>
    )
}

export default Navbar;