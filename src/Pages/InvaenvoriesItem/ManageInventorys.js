import React from 'react';
import redCar from '../../assets/images/redCar.jpg'
import useInventory from '../Hooks/useInventory';
import ManageInventory from './ManageInventory';

const ManageInventorys = () => {
      const [cars] = useInventory([]);
      return (
            <div style={{ background: `url(${redCar})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%' }}>
                                     <button className='btn btn-success text-white'>Add New Car +</button>

                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent'>
                  {
                        cars.map(car=><ManageInventory key={car.id} car={car}></ManageInventory>)
                  }
                  </div>

                  
            </div>
      );
};

export default ManageInventorys;