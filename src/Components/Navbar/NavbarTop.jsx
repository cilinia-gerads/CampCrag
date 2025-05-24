import './Navbar.css'
import { Check, Info } from 'lucide-react'
import { Link } from 'react-router-dom'


const NavbarTop = () => {
  return (
    <div className='navbar-top'>
        <div>
            <p><Check />100% free delivery for all orders</p>
        </div>
        <div>
            <select defaultValue="Server location" className="bg-none h-[30px] w-[70px]">
                <option>Eng</option>
                <option>Thai</option>
            </select>
            <button>
                <Link>Faqs</Link>
           </button>
           <button>
                <Link><Info size={18}/>need help</Link>
           </button>
        </div>
    </div>
  )
}

export default NavbarTop
