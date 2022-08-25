import React from 'react';
import useManageInventory from '../Hooks/useManageInventory';
import CarCollection from '../Invaenvories/CarCollection'
import redCar from '../../assets/images/redCar.jpg'

const ManageInventorys = () => {
      const [cars,setCars] = useManageInventory([]);
      return (
            <div style={{ background: `url(${redCar})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%' }}>
                  
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent'>
                  {
                        cars.map(car=><CarCollection key={car.id} car={car}></CarCollection>)
                  }
                  </div>

                  
            </div>
      );
};

export default ManageInventorys;