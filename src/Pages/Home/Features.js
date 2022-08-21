import React from 'react';
import girlWithKey from '../../assets/images/girlWithKey.webp'
import cars from '../../assets/images/cars.jpg'
import brand from '../../assets/images/brand.jpg'
import dance from '../../assets/icons/dance.png'
import car from '../../assets/icons/car.png'
import steering from '../../assets/icons/steering.png'

const Features = () => {
      return (
            <div className='bg-car-bg1'>
                  <h1 className='uppercase text-3xl font-bold text-left text-primary pt-5 p-2'>features</h1>
                  <div
                  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mb-5'>
                  <div class="card bg-base-100 shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={girlWithKey} alt="Shoes" /></figure>
                        <div class="card-body ">

                              <h1 className='text-xl font-bold text-left mt-52'>199+</h1>
                              <div className='flex justify-between'>

                                    <div><h2 class=" text-2xl font-bold ">Happy Client's!</h2></div>
                                    <div ><img  src={dance} alt="" /></div>
                              </div>


                        </div>
                  </div>
                  <div class="card  bg-base-100 shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={cars} alt="Shoes" /></figure>
                        <div class="card-body">
                        <h1 className='text-xl font-bold text-left mt-52'>299+</h1>
                              <div className='flex justify-between'>
                                    <div><h2 class=" text-2xl font-bold ">Our Cars!</h2></div>
                                    <div><img src={car} alt="" /></div>
                              </div>

                        </div>
                  </div>
                  <div class="card shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={brand} alt="Shoes" /></figure>
                        <div class="card-body">
                        <h1 className='text-xl font-bold text-left mt-52'>99+</h1>
                              <div className='flex justify-between'>
                                    <div><h2 class=" text-2xl font-bold ">Our Brands!</h2></div>
                                    <div><img src={steering} alt="" /></div>
                              </div>

                        </div>
                  </div>
            </div>
            </div>
      );
};

export default Features;