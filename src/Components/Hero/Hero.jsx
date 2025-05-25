import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      {/* hero-text */}
      <div className='hero-text'>
        <div className="hero-text-wrapper">
          <h1 className='text-5xl'>Essential Gear, Endless Adventures</h1>
          <p>Everything you need to conquer the outdoors</p>
        </div>
      </div>
      {/* hero-slide */}
      <div className="hero-slide">
        <div className="hero-slide-wrapper">
          <div className="hero-slide-wrapper-holder">
            <div id="slider-img-1"></div>
            <div id="slider-img-2"></div>
            <div id="slider-img-3"></div>
            <div id="slider-img-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero