import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { IoIosStarHalf } from 'react-icons/io';

const TopPlant = ({plant}) => {
  const { plantName, image, price, rating } = plant;
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-56 h-56 shadow-sm"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-semi-bold">{plantName}</h2>
        <div className="flex justify-between gap-5">
          <div className="flex items-center gap-1">
            <p className="text-red-500 text-xl">
              <FaDollarSign />
            </p>
            <p className="text-xl text-red-500 font-bold">{price}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-yellow-500 text-xl">
              <IoIosStarHalf />
            </p>
            <p className="text-xl text-yellow-500 font-bold">{rating}</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-black text-[#ffffff] hover:bg-[#F3EEEA] hover:text-black ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPlant;