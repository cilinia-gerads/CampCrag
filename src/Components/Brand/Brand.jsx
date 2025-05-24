import './Brand.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Brand = () => {

  const brands = [
    {
      id: 1,
      name: "react",
      image: "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"
    },{
      id: 2,
      name: "javascript",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s"
    },{
      id: 3,
      name: "html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk594AhSKw5Eb3iHkPHs_XmpCqaRVgu0mvg&s"
    },{
      id: 4,
      name: "css",
      image: "https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png"
    },{
      id: 5,
      name: "licide-react",
      image: "https://avatars.githubusercontent.com/u/66879934?v=4"
    },{
      id: 6,
      name: "github",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },{
      id: 7,
      name: "tailwind",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
    },{
      id: 8,
      name: "daisyui",
      image: "https://images.seeklogo.com/logo-png/61/2/daisyui-logo-png_seeklogo-616852.png"
    },{
      id: 9,
      name: "vscode",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
    },{
      id: 10,
      name: "mfu",
      image: "https://archives.mfu.ac.th/wp-content/uploads/2019/06/Mae-Fah-Luang-University-2.png"
    }
  ]

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="brand overflow-hidden">
       <div className="brand-slider-container py-10">
          <Slider {...settings}>
            {brands.map((brand) => (
              <div key={brand.id} className='py-10'>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default Brand
