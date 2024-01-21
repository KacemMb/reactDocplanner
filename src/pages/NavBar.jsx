import React from 'react'
import Navigation from '../components/Navigation'
import '../style/NavBar.css'
import Logo from '../components/Logo'
function NavBar() {
  return (
    <div className='NavBarContainer'>
        <Logo/>
        <Navigation/>
    </div>
  )
}

export default NavBar
