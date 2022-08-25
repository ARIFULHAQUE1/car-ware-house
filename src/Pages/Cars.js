import React, { useEffect, useState } from 'react';
import Car from './Car';
import redCar from '../assets/images/redCar.jpg'
import list from '../assets/icons/list.png'
import { Link } from 'react-router-dom';
import useInventory from './Hooks/useInventory';
const Cars = () => {
     const[cars,setCars]=useInventory([])

      return (
            <div style={{ background: `url(${redCar})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%' }}>
                  
                  <div className='flex justify-between'>
                        <div><h1 className='text-3xl font-bold text-primary pl-5'>Inventory</h1></div>
                        <div className='pr-5 mt-3'><Link to={'/manageInventory'}><img src={list} alt="" /></Link></div>
                  </div>

                  <div
                        className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent'>
                        {
                        cars.slice(0,6).map(car=>
                              <Car key={car.id} car={car}></Car>)
                              
                          
                        }
                  </div>
            </div>

      );
};

export default Cars;