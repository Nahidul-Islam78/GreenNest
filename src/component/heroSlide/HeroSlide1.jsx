import React from 'react';

const HeroSlide1 = () => {
  return (
    <div className="hero bg-[#F3EEEA] min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">Snake Plant</h1>
          <h2 className="text-3xl font-bold py-3">"Thrive in the Shadows."</h2>
          <p className="py-6">
            Perfect for beginners and dim corners—this air purifier works while
            you sleep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide1;