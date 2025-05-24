import './Popular.css'
import popular_products from '../Assets/popular_products'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular p-10'>
      <h1 className='text-center font-bold text-6xl p-10'>MOST POPULAR</h1>
      <hr />
      <div className="popular-item flex flex-wrap justify-center text-center pt-10 gap-8">
        {popular_products.map((item, i) => (
          <Item 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
        
    </div>
  )
}

export default Popular
