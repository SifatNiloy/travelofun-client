
import { useEffect, useState } from 'react';
import ballon from '../assets/images/banner/ballon.jpg';
import building from '../assets/images/banner/building.jpg';
import sunset from '../assets/images/banner/sunset.jpg';


const slides = [
    {
      image: ballon,
      title: 'Air Balloon Rides',
      description: 'Ride a balloon over the landscape and enjoy the sunset.',
    },
    {
      image: sunset,
      title: 'Explore Famous Cities',
      description: 'Explore famous cities, meet new people, and experience new cultures.',
    },
    {
      image: building,
      title: 'See Great Architectures',
      description: 'Marvel at the great architectural achievements of mankind.',
    },
  ];
  
  const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000); 
  
      return () => clearInterval(interval);
    }, []);
  
    const changeSlide = (index) => {
      setActiveSlide(index);
    };
  
    return (
      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-none relative">
              <img src={slide.image} alt={slide.title} className="w-full object-cover h-[600px]" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Navigation buttons */}
        <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-5">
          <button onClick={() => changeSlide((activeSlide - 1 + slides.length) % slides.length)} className="btn btn-circle">
            ❮
          </button>
          <button onClick={() => changeSlide((activeSlide + 1) % slides.length)} className="btn btn-circle">
            ❯
          </button>
        </div>
  
        {/* Indicators */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-gray-500'}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Banner;