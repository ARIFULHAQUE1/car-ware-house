import React, { useEffect, useState } from 'react';
import Car from './Car';
import redCar from '../assets/images/redCar.jpg'
const Cars = () => {
      const [cars,setCars]=useState([]);
      useEffect(()=>{
            fetch('data.json')
            .then(res=>res.json())
            .then(data=>setCars(data))
            
      },[])
 
      return (
            <div style={{background:`url(${redCar})`,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundSize:'100%'}}
            className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 bg-transparent'>
                  {
                        cars.map(car=><Car key={car.id} car={car}></Car>)
                  }
            </div>
      );
};

export default Cars;