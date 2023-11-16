import React, { useEffect, useState } from 'react';
import { consultBg } from '../assets';

const Consult = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${consultBg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: `50% calc(50% - ${scrollPosition * 0.3}px)`, // Adjust the multiplier for the parallax effect
    backgroundSize: 'cover',
    height: '400px',
    width: '100%',
    position: 'relative',
    transform: 'translate3d(0, 0, 0)', // This is needed to prevent some browsers from making the parallax effect disappear on page load
    overflow: 'hidden',
  };

  return (
    <section>
      <div className='relative'>
        <div className='absolute top-[40%] left-10 text-white z-20'>
          <div className='flex'>
            <div>
              <h3 className='text-[36px] font-700 mb-4'>
                Free consultation with exceptional quality
              </h3>
              <p className='text-[24px] font-300 underline tracking-widest text-white'>
                Just one call away: +84 1102 2703
              </p>
            </div>
            <div>
              <button className='border-2 px-6 py-2 z-20'>
                Get your consultation
              </button>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 bg-black h-full w-full bg-opacity-60 z-10'></div>
        <div style={parallaxStyle}></div>
      </div>
    </section>
  );
};

export default Consult;
