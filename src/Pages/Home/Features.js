import React from 'react';
import girlWithKey from '../../assets/images/girlWithKey.webp'
import cars from '../../assets/images/cars.jpg'
import brand from '../../assets/images/brand.jpg'


const Features = () => {
      return (
            <div 
            className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  <div class="card bg-base-100 shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={girlWithKey} alt="Shoes" /></figure>
                        <div class="card-body   delay-150 bg-blue-500 hover:-translate-x-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                              <h2 class="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              
                        </div>
                  </div>
                  <div class="card  bg-base-100 shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={cars} alt="Shoes" /></figure>
                        <div class="card-body">
                              <h2 class="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              
                        </div>
                  </div>
                  <div class="card shadow-xl image-full mt-10 transition translate-x-3 hover:scale-y-105 delay-200 ease-in-out duration-200">
                        <figure><img src={brand} alt="Shoes" /></figure>
                        <div class="card-body">
                              <h2 class="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              
                        </div>
                  </div>
            </div>
      );
};

export default Features;