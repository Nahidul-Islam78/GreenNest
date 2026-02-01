import React from 'react';
import Hero from '../component/Hero';
import { useLoaderData } from 'react-router';

const HomePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div >
      <section className="hero ">
        <Hero ></Hero>
      </section>
    </div>
  );
};

export default HomePage;