import { useContext } from 'react'
import { Delete } from 'lucide-react'
import { ProductContext } from '../../Context/ProductContext'
import './CartItems.css'

const CartItems = () => {

    const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(ProductContext);

    return (
        <div className='cartitems m-20'>
            <div className='cartitems-title'>
                <p className='text-center'>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if(cartItem[e.id] > 0) {
                    return (
                        <div>
                            <hr />
                            <div className='cartitems-list mx-5'>
                                <img src={e.image} alt="" />
                                <p className='name'>{e.name}</p>
                                <p className='price'>฿{Number(e.new_price).toLocaleString()}</p>
                                <button className='quantity bg-white w-[64px] h-[50px]'>{cartItem[e.id]}</button>
                                <p className='total'>฿{Number(e.new_price * cartItem[e.id]).toLocaleString()}</p>
                                <button className='delete cursor-pointer' onClick={() => removeFromCart(e.id)}><Delete size={42} /></button>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            })}
            <hr />
            {/* cartitem-down */}
            <div className='total-cart flex mt-20 mx-5'>
                {/* cartitem-total */}
                <div className='flex flex-1 flex-col gap-8'>
                    <h1 className='text-2xl font-bold'>cart totals</h1>
                    <div className='cartitem-total-items mr-30'>
                        <div className='cartitem-total-item'>
                            <p>subtotal</p>
                            <p>฿{Number(getTotalCartAmount()).toLocaleString()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <p>shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <h3>total</h3>
                            <h3>฿{Number(getTotalCartAmount()).toLocaleString()}</h3>
                        </div>
                    </div>
                    <button>proceed to checkout</button>
                </div>
                {/* promocode */}
                <div className='promocode flex-1 mt-1'>
                    <p>if you have a promo code, enter it here</p>
                    <div className='mt-2'>
                        <input className='bg-white p-2 border-none outline-none' type="text" placeholder='promo code...' />
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems