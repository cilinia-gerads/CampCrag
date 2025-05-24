import './Delivery.css'
import { Percent, Truck, Clock, ShieldCheck } from 'lucide-react'

const Delivery = () => {
  return (
    <div className="delivery text-2xl h-100 flex gap-8">
      <div className="delivery-info">
          <div className='pr-2'><Percent size={60}/></div>
          <div>
              <h1>Discount</h1>
              <p>every week new sales</p>
          </div>
      </div>
      <div className='delivery-info'>
          <div className='pr-2'><Truck size={60} /></div>
          <div>
              <h1>Free Delivery</h1>
              <p>100% Free for all orders</p>
          </div>
      </div>
      <div className="delivery-info">
          <div className='pr-2'><Clock size={60} /></div>
          <div>
              <h1>Great Support 24/7</h1>
              <p>We care your experiences</p>
          </div>
      </div>
      <div className="delivery-info">
          <div className='pr-2'><ShieldCheck size={60} /></div>
          <div>
              <h1>Secure Payment</h1>
              <p>100% Secure Payment Method</p>
          </div>
      </div>
    </div>
  )
}

export default Delivery