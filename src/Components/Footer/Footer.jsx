import './Footer.css'
import { TentTree, Instagram, Facebook, Mail } from 'lucide-react'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo flex items-center">
        <TentTree size={100} /><span className='text-6xl font-bold'>CampCrag</span>
      </div>
      <div className='footer-contect flex justify-between'>
        <div className='footer-contact-left'>
            <h1>Follow us</h1>
            <div className='flex gap-2'>
                <Instagram />
                <Facebook />
                <Mail />
            </div>
        </div>
        <div className='footer-contact-right'>
            <h1>Subscribe to our newsletter</h1>
            <form action='##'  className='bg-white p-1 rounded-2xl'>
                <input className='outline-none px-2' type='email' placeholder='Your Email..' required />
                <button type='submit' className='bg-[var(--gray2)] text-white rounded-2xl p-2'>Subscribe</button>
            </form>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>copy right @ 2025 - all right reserved</p>
      </div>
    </div>
  )
}

export default Footer