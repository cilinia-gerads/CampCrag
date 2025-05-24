import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import { useParams } from "react-router-dom";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import RelativeProduct from "../../Components/RelativeProduct/RelativeProduct";


const Product = () => {

  const {all_product} = useContext(ProductContext);
  const {productID} = useParams();
  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div className="product">
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <RelativeProduct />
      <hr />
    </div>
  )
}

export default Product
