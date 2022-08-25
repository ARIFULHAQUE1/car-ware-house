import React from 'react';
import { Link } from 'react-router-dom';

const carCollection = ({car}) => {
      const { name, description, img, price, quantity, supplyer } = car;
      return (
            <div>
                  <div className="card  bg-transparent border shadow-xl mt-5 text-base-300  ">
                      
                              <div  className='static' >
                                    <figure className='h-72'><img src={img} /></figure>

                                    <div className="badge badge-error text-white mt-1 font-bold 4 absolute top-1/2" >Supplyer:{supplyer}</div>
                              </div>
                      


                        <div className="card-body">

                              <div className='flex justify-between text-xl text-primary font-semibold'>
                                    <h2 >
                                          {name}

                                    </h2>
                                    <div>
                                          <h2 >
                                                Price: <span className=' text-2xl underline'>${price}</span>

                                          </h2>
                                    </div>
                              </div>

                              <p>{description}</p>
                              <div className="card-actions justify-end">

                                    <div className="badge badge-error text-white font-bold">Available:{quantity}</div>

                                    <button className='badge badge-success rounded-xl text-white font-bold'>Delivered</button>


                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default carCollection;