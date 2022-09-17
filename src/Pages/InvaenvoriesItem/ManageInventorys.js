import React from 'react';
import { useNavigate } from 'react-router-dom';
import redCar from '../../assets/images/redCar.jpg'
import useInventory from '../Hooks/useInventory';
import ManageInventory from './ManageInventory';

const ManageInventorys = () => {
      const [cars] = useInventory([]);
      const navigate= useNavigate();
     const addItem =()=>{
            navigate('/addItem')
      }
      return (
            <div style={{ background: `url(${redCar})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%' }}>
            <div className='flex justify-end'>
                  <div>
                  <button onClick={()=> addItem()} className='btn btn-success text-white m-4'>Add New Car +</button>

                  </div>
                  </div>

                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent'>
                  {
                        cars.map(car=><ManageInventory key={car._id} car={car}></ManageInventory>)
                  }
                  </div>

                  
            </div>
      );
};

export default ManageInventorys;