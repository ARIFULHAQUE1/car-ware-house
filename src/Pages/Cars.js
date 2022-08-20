import React, { useEffect, useState } from 'react';
import Car from './Car';

const Cars = () => {
      const [cars,setCars]=useState([]);
      useEffect(()=>{
            fetch('data.json')
            .then(res=>res.json())
            .then(data=>setCars(data))
            
      },[])
 
      return (
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 bg-gradient-to-r from-car-bg1 to-car-bg2'>
                  {
                        cars.map(car=><Car key={car.id} car={car}></Car>)
                  }
            </div>
      );
};

export default Cars;