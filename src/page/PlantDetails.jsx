import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const PlantDetails = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const plant = data.find(singlePlant => singlePlant.plantId == id);
  const { plantName, description, price, rating, image, availableStock } =
    plant;
  const handelBook = (e) => {
    e.target.reset()
    e.preventDefault();
    toast.success("plant is booked successfully!");
  }
  return (
    <div className="w-10/12 mx-auto ">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="plant"
            className="rounded-xl max-h-screen w-full object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{plantName}</h2>
          <p>{description}</p>
          <div className="flex gap-20">
            <p>${price}</p>
            <p>{rating}</p>
            <p>{availableStock}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handelBook}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Book Consultation</legend>

          <label className="label">Name</label>
          <input type="name" className="input" placeholder="name" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <button type='submit' className="btn btn-neutral mt-4">Book Now</button>
        </fieldset>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default PlantDetails;