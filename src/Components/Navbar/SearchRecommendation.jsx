import './Search.css'
import { Link } from "react-router-dom"

const SearchRecommendation = ({recommendation, input, clearInput}) => {
    // if input have length or is not empty -> display div.search-recommendation
    if(input.length) {
        return (
            <div className='search-recommendation'>
                {recommendation.slice(0, 10).map((item, id) => (
                    <Link to={`/product/${item.id}`} onClick={(e) => clearInput(e.target.value)}>
                        <div key={id} className="flex items-center gap-2">
                            <img src={item.image} alt={item.name} className="w-15 h-20 object-cover" />
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
        )
    } else {
        return;
    }
}

export default SearchRecommendation
