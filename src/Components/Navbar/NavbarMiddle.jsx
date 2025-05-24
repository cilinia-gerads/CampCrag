import './Navbar.css'
import { TentTree, AlignRight, ShoppingCart, User  } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import { NavbarContext } from '../../Context/NavbarContext'
import SearchBox from './SearchBox'


const NavbarMiddle = () => {

    const { getTotalcartItems } = useContext(ProductContext);
    const { setMenu, toggleMenu, mobileMenu, sticky, setSticky } = useContext(NavbarContext);
    useEffect(() => {
        window.addEventListener('scroll', () => {
        window.scrollY > 10 ? setSticky(true) : setSticky(false)
        })
    });
    
    return (
        <div className='navbar-middle'>
            <div className={`logo-mobile-menu flex justify-center ${sticky ? 'logo-mobile-menu-stickyTop' : ''}`}>
                {/* logo */}
                <Link 
                    to='/' 
                    className='text-5xl flex items-center'
                    onClick={() => {setMenu("home")}}>
                        <TentTree size={60} />CampCrag
                </Link>
                {/* mobile-menu */}
                <div className="mobile-menu" onClick={() => toggleMenu()}>
                    <AlignRight size={38}/>
                </div>
            </div>
            {/* search-box */}
            <div>
                <SearchBox />
            </div>
            {/* cart + login */}
            <div className={`cart-login ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
                {/* cart */}
                <button className="btn cart capitalize rounded-xl relative p-4">
                    <Link to='/cart'>
                        <ShoppingCart size={30} />
                        <div className="badge badge-sm absolute top-0 right-0 bg-[#029fae]">{getTotalcartItems()}</div>
                    </Link>
                </button>
                {/* login */}
                <div className="dropdown login">
                    <div tabIndex={0} role="button" className="btn rounded-xl"><User /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-24 p-2 shadow-sm">
                    <li><Link to='/auth/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }

export default NavbarMiddle
