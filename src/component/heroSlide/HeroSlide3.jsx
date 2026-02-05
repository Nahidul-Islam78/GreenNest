import React from 'react';

const HeroSlide3 = () => {
  return (
    <div className="hero bg-[#F3EEEA] min-h-screen my-4">
      <div className="hero-content flex-col md:flex-row-reverse  lg:flex-row-reverse">
        <img
          src="https://www.thespruce.com/thmb/04Dej-WMhZCGiIpYS-3Sz7nzeDw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-fiddle-leaf-fig-indoors-1902756-hero-feca31e64e91430794e2bdcc9fa1e901.jpg"
          className="max-w-sm rounded-lg shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Peace Lily</h1>
          <h2 className="text-3xl font-bold py-3">
            "Breathe Deep, Live Clean."
          </h2>
          <p className="py-6">
            It will "faint" when thirsty—just add water to see it bounce back in
            hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide3;