import { replace } from 'dom/lib/mutation'
import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import "./NavbarStyles.css"

export const Navbar = () => {

    const navigate = useNavigate()

    const onLogOut = () => {
        navigate("/login",{
            replace:true
        })
    }
  return (
    <div className='navbarContainer'>
        <div>
            <NavLink to="/marvel" className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')}>
                 Marvel
            </NavLink>
            <NavLink to="/dc" className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')}>
                 DC
            </NavLink>
            <NavLink to="/search" className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')}>
                 Search
            </NavLink>
        </div>
        <button onClick={onLogOut}>
            Log out
        </button>
    </div>
 )
}
