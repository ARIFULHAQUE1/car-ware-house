import React from 'react';

const Car = ({car}) => {
      console.log(car)
      const {name,description,img}=car;
      return (
            <div>
            <div className="card bg-transparent border shadow-xl mt-5 text-base-300">
                        <figure><img src={img}/></figure>
                        <div className="card-body">
                              <h2 className="card-title">
                                    {name}
                                    <div className="badge badge-secondary">NEW</div>
                              </h2>
                              <p>{description}</p>
                              <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Car;