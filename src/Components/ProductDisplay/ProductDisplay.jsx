import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import { ToastContainer, toast, Slide } from 'react-toastify';

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ProductContext);

    const notify = () => {
        toast.success('✅ Product added to cart successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left flex gap-4">
                <div className="productdisplay-img-list flex flex-col gap-4">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right pl-4">
                <h1 className='text-5xl font-bold'>{product.name}</h1>
                <div className="productdisplay-star flex items-center mt-10 gap-1">
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_dull_icon} />
                    (122)
                </div>
                <div className="productdisplay-right-prices flex my-[20px] gap-4 text-xl font-bold">
                    <div className="productdiplay-right-price-old text-[var(--lightgray)] line-through">
                        ฿{Number(product.old_price).toLocaleString()}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ฿{Number(product.new_price).toLocaleString()}
                    </div>
                </div>
                <div className="productdisplay-right-description text-xl">
                    Get ready for your next adventure with this essential camping gear designed for nature lovers and outdoor explorers. Crafted with high-quality, durable materials, it's built to withstand rugged conditions while keeping your journey lightweight and comfortable. Whether you're camping in the woods, hiking mountains, or just enjoying a night under the stars, this product brings convenience, style, and reliability to every trip.
                </div>
                <button className='add-to-cart w-[200px] h-[60px] my-4 p-4 text-xl' onClick={() => {addToCart(product.id); notify();}} >
                    ADD TO CART
                </button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Slide}
                />
            </div>
        </div>
    )
}

export default ProductDisplay
