import React from 'react';

const MeetExpert = () => {
  return (
    <div className="my-4">
      <p className="text-5xl font-bold text-center">Meet Our Green Experts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        <div className="expert1 ">
          <div className="card card-side bg-base-100 shadow-sm ">
            <figure>
              <img
                className="rounded-full "
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="expert"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dr. Aris Thorne</h2>
              <p>Tropical Botany & Soil Health</p>
              <p>
                With a PhD in Plant Biology, Aris ensures your soil mix is
                perfectly balanced for growth.
              </p>
            </div>
          </div>
        </div>
        <div className="expert2 ">
          <div className="card card-side bg-base-100 shadow-sm ">
            <figure>
              <img
                className=" rounded-full "
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="expert"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Maya Selva</h2>
              <p>Low-Light & Indoor Survival</p>
              <p>
                Maya is the queen of apartment gardening, specializing in making
                plants thrive in dim spaces.
              </p>
            </div>
          </div>
        </div>
        <div className="expert3 ">
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                className="rounded-full "
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="expert"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dr. Aris Thorne</h2>
              <p>Tropical Botany & Soil Health</p>
              <p>
                With a PhD in Plant Biology, Aris ensures your soil mix is
                perfectly balanced for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetExpert;