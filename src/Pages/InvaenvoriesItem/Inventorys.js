import React from 'react';
import Inventory from '../InvaenvoriesItem/Inventory'
import redCar from '../../assets/images/redCar.jpg'
import { Link } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';
const Inventorys = () => {
     const[cars]=useInventory([]);
      return (
            <div style={{ background: `url(${redCar})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%' }}>
                  
                  <div className='flex justify-between'>
                        <div><h1 className='text-3xl font-bold text-primary pl-5 mt-3'>Inventory</h1></div>
                        
                  </div>

                  <div
                        className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent'>
                        {
                        cars.slice(0,6).map(car=>
                              <Inventory key={car._id} car={car} ></Inventory>)
                              
                          
                        }
                  </div>
                  <div className='p-5 flex justify-end text-xl font-bold text-primary pl-5'><Link to={'/manageItem'}>ManageInventory &#10095;&#10095;</Link></div>
            </div>

      );
};

export default Inventorys;