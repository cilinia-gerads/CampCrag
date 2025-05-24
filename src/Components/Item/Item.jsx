import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} onClick={() => window.scrollTo({ top:0, behavior: 'smooth'})} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices justify-center">
        <div className="item-price-new">฿{Number(props.new_price).toLocaleString()}</div>
        <div className="item-price-old">฿{Number(props.old_price).toLocaleString()}</div>
      </div>
    </div>
  )
}

export default Item
