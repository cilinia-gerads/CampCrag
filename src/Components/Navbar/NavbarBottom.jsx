import './Navbar.css'
import { useContext } from 'react'
import { NavbarContext } from '../../Context/NavbarContext'
import { NavLink } from 'react-router-dom'

const NavbarBottom = () => {

  const { menu, setMenu, mobileMenu } = useContext(NavbarContext)

  return (
    <div className={`navbar-bottom ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
      <nav className='flex items-center gap-10 p-2'>
        <NavLink 
            to='/' 
            className="navbar-bottom-navlink"
            onClick={() => {setMenu("home")}}>
              home{menu === "home"?<hr />:<></>}
          </NavLink>
          <NavLink 
            to='/tent&backpack'
            className="navbar-bottom-navlink"
            onClick={() => {setMenu("tent")}}>
              tent & backpack{menu === "tent"?<hr />:<></>}
          </NavLink>
          <NavLink 
            to='/cooking&hydration'
            className="navbar-bottom-navlink"
            onClick={() => {setMenu("cookingandhydration")}}>
              Cooking & Hydration{menu === "cookingandhydration"?<hr />:<></>}
          </NavLink>
          <NavLink 
            to='/petgear'
            className="navbar-bottom-navlink"
            onClick={() => {setMenu("pet")}}>
              pet gear{menu === "pet"?<hr />:<></>}
          </NavLink>
          <NavLink 
            to='/other'
            className="navbar-bottom-navlink"
            onClick={() => {setMenu("other")}}>
              other{menu === "other"?<hr />:<></>}
          </NavLink>
      </nav>
    </div>
  )
}

export default NavbarBottom
