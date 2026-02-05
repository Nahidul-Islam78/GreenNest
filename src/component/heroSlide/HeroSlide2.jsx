import React from 'react';

const HeroSlide2 = () => {
  return (
    <div className="hero bg-[#F3EEEA] min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse  lg:flex-row-reverse">
        <img
          src="https://www.thespruce.com/thmb/S9r8nL7VRNW6K7Je2l7eLlpOg9w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-grow-calathea-indoors-1902745-hero-ec9ad66c01b74dca97ea02e167b6a660.jpg"
          className="max-w-sm rounded-lg shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Monstera Deliciosa</h1>
          <h2 className="text-3xl font-bold py-3">
            "Wild Style, Rooted at Home."
          </h2>
          <p className="py-6">
            Give it space to climb and watch the iconic "Swiss cheese" leaves
            unfold.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide2;