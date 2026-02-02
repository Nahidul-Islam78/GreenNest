import React from 'react';

const PlantsTips = () => {
  return (
    <div>
      <p className="text-5xl font-bold text-center">Plant Care Tips</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 my-6 ">
        <div className="tips-card1">
          <div className="card bg-base-100 w-96 h-full shadow-sm">
            <figure>
              <img
                src="https://cdn.patchplants.com/uploads/16_9_Hero_min_ac20d348c1.jpg"
                alt="water"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Drainage is Key
                <div className="badge badge-secondary">Critical</div>
              </h2>
              <p>
                Always use pots with drainage holes. Standing water at the
                bottom of a pot can cause root rot, which is the #1 killer of
                indoor plants.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Watering</div>
                <div className="badge badge-outline">Once</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tips-card2">
          <div className="card bg-base-100 w-96 h-full shadow-sm">
            <figure>
              <img
                src="https://www.greenleafips.com/wp-content/uploads/2022/03/Top-Indoor-High-Light-Plants-for-Your-Sunny-Room.jpg"
                alt="water"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Understanding Indirect Light
                <div className="badge badge-secondary">Medium</div>
              </h2>
              <p>
                Most indoor plants love 'Bright Indirect Light.' This means a
                spot where the sun doesn't hit the leaves directly, but the room
                is still very bright.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Sunlight</div>
                <div className="badge badge-outline">Permanent</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tips-card3">
          <div className="card bg-base-100 w-96 h-full shadow-sm">
            <figure>
              <img
                src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2024/3/4/rx_amazon_miracle-gro-indoor-plant-food.jpg.rend.hgtvcom.616.440.85.suffix/1709592515305.webp"
                alt="water"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Dilute for Safety
                <div className="badge badge-secondary">High</div>
              </h2>
              <p>
                If using liquid fertilizer, dilute it to half the strength
                recommended on the bottle to avoid shocking sensitive indoor
                species.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fertilizing</div>
                <div className="badge badge-outline">Seasonal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsTips;