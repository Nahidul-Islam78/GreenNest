import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PlantDetails = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const plant = data.find(singlePlant => singlePlant.plantId == id);
  console.log(plant)
  return (
    <div>
      <p>this is plant details {id}</p>
    </div>
  );
};

export default PlantDetails;