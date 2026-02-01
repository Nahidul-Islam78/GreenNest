import React from 'react';
import TopPlant from './TopPlant';

const TopPlants = ({ data }) => {
  //console.log(data);

  //top rated plant filtering
  const plants = data.filter(plant => plant.rating > 4);
  //console.log(plants);
  
  return (
    <div>
      <p className="text-5xl font-bold text-center">Top Rated Plants</p>
      <div className="plant-card grid grid-cols-1 lg:grid-cols-3 gap-20 my-6 ">
        {
          plants.map(plant=><TopPlant key={plant.plantId} plant={plant}></TopPlant>)
          
        }
      </div>
    </div>
  );
};

export default TopPlants;