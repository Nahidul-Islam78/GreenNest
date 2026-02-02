import React from 'react';
import Hero from '../component/Hero';
import { useLoaderData } from 'react-router';
import TopPlants from '../component/TopPlants';
import PlantsTips from '../component/PlantsTips';

const HomePage = () => {
  const data = useLoaderData();
  //console.log(data);
  return (
    <div>
      <section className="hero ">
        <Hero></Hero>
      </section>
      <section className=" top-plant w-11/12 mx-auto  my-4">
        <TopPlants data={data}></TopPlants>
      </section>
      <section className="plant-tips w-11/12 mx-auto  my-8">
        <PlantsTips></PlantsTips>
      </section>
    </div>
  );
};

export default HomePage;