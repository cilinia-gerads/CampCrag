import { ChevronRight } from 'lucide-react'

const Breadcrums = (props) => {

    const {product} = props;

    return (
        <div className='breadcrums flex pl-1 capitalize'>
            Home <ChevronRight /> {product.category} <ChevronRight /> {product.name}
        </div>
    )
}

export default Breadcrums
