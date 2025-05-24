import './Search.css'
import { useContext, useState } from 'react'
import { Search, X } from 'lucide-react'
import { ProductContext } from '../../Context/ProductContext';
import SearchRecommendation from './SearchRecommendation';


const SearchBox = () => {

    const [ input, setInput ] = useState(""); // what ever user typing inside the input
    const [ recommendation, setRecommendation ] = useState([]);
    const { all_product } = useContext(ProductContext);

    const handleFilter = (value) => {
        setInput(value); // what ever user typing inside the input
        const filteredInfo = all_product.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
        )
        setRecommendation(filteredInfo);
    }
    const clearInput = () => {
        setRecommendation([]);
        setInput("");
    }

    return (
        <div>
            <form action='#' className='max-w-96 h-[44px] relative'>
                <input 
                    type='text' 
                    placeholder='Search here...' 
                    value={input}
                    onChange={(e) => handleFilter(e.target.value)}
                    className='w-full h-full bg-[#3C3D37] rounded-lg pl-4 outline-none' />
                <button type='button' className='absolute to-50% right-4 translate-y-[10px]'>
                    {input.length === 0 ? <Search /> : <X id='clearBtn' onClick={(e) => clearInput(e.target.value)} /> }
                </button>
                <SearchRecommendation input={input} recommendation={recommendation} clearInput={clearInput} />
            </form>
        </div>
    )
}

export default SearchBox
