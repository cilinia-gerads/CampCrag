import './Navbar.css'
import NavbarBottom from './NavbarBottom'
import NavbarMiddle from './NavbarMiddle'
import NavbarTop from './NavbarTop'

const Navbar = () => {

  return (
    <div className='navbar'>
        <NavbarTop />
        <NavbarMiddle />
        <NavbarBottom />
    </div>
  )
}

export default Navbar