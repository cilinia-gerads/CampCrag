import './RelativeProduct.css'
import data_product from '../Assets/popular_products'
import Item from '../Item/Item'

const RelativeProduct = () => {
  return (
    <div className='relativeproduct py-40'>
        <h1 className='text-6xl font-bold text-center py-10'>Related Products</h1>
        <hr />
        <div className='flex flex-wrap gap-5 py-15 justify-center'>
            {data_product.map((item, i) => (
                <Item 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ) )}
        </div>
    </div>
  )
}

export default RelativeProduct
