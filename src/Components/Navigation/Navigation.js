import React from 'react'
import NavLink from 'Components/Navigation/NavLink'
import './Navigation.scss'

const Navigation = () => {
  return (
      <nav className='top-navigation'>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/users" end>Users</NavLink>
        <NavLink to="/tracking" end>Tracking</NavLink>
      </nav>
  )
}

export default Navigation