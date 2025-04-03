import { replace } from 'dom/lib/mutation'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../../auth/context/AuthContext'
import "./NavbarStyles.css"

export const Navbar = () => {
    const {user,logout} = useContext(AuthContext)
    console.log(user)
    
    const navigate = useNavigate()

    const onLogOut = () => {
        logout()
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
        <div className='logoutUserContainer'>
            <h1>{user?.name}</h1>
            <button onClick={onLogOut}>
                Log out
            </button>

        </div>
    </div>
 )
}
