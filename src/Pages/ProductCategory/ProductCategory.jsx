import { useContext } from 'react'
import './ProductCategory.css'
import { ProductContext } from '../../Context/ProductContext'
import Item from '../../Components/Item/Item';

const ProductCategory = (props) => {

  const { all_product } = useContext(ProductContext);

  return (
    <div className="product-category">
      <div className="product-category-banner">
        <img src={props.banner} />
        <h1>{props.title}</h1>
      </div>
      <div className='flex flex-wrap gap-8 justify-center py-10'>
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item 
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ProductCategory
