import React from 'react';
import girlWithKey from '../../assets/images/girlWithKey.webp'
import cars from '../../assets/images/cars.jpg'
import brand from '../../assets/images/brand.jpg'
import dance from '../../assets/icons/dance.png'
import car from '../../assets/icons/car.png'
import steering from '../../assets/icons/steering.png'

const Features = () => {
      return (
            <div className='bg-secondary '>
                  <h1 className='uppercase text-3xl font-bold text-left text-primary pt-5 pl-7 '>features</h1>
                  <div
                  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   p-5'>
                  <div className="card bg-base-100 shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={girlWithKey} alt="Shoes" /></figure>
                        <div className="card-body ">

                              <h1 className='text-xl font-bold text-left mt-52 text-white'>199+</h1>
                              <div className='flex justify-between'>

                                    <div><h2 className=" text-2xl font-bold text-white">Happy Client's!</h2></div>
                                    <div ><img  src={dance} alt="happy client" /></div>
                              </div>


                        </div>
                  </div>
                  <div className="card  bg-base-100 shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={cars} alt="cars" /></figure>
                        <div className="card-body">
                        <h1 className='text-xl font-bold text-left mt-52 text-white'>299+</h1>
                              <div className='flex justify-between'>
                                    <div><h2 className=" text-2xl font-bold text-white">Our Cars!</h2></div>
                                    <div><img src={car} alt="" /></div>
                              </div>

                        </div>
                  </div>
                  <div className="card shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={brand} alt="Shoes" /></figure>
                        <div className="card-body">
                        <h1 className='text-xl font-bold text-left mt-52 text-white'>99+</h1>
                              <div className='flex justify-between'>
                                    <div><h2 className=" text-2xl font-bold text-white">Our Brands!</h2></div>
                                    <div><img src={steering} alt="Brands" /></div>
                              </div>

                        </div>
                  </div>
            </div>
            </div>
      );
};

export default Features;