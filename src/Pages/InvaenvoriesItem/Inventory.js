import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ car }) => {
    
      const { name, description, img, price, quantity, supplyer, _id } = car;
      const navigate = useNavigate();

      
      const updateItem = (id) =>{
            navigate(`/update/${_id}`)
      }
     
       
      
      return (
            <div>
                 
                 
                  <div className="card  bg-transparent border shadow-xl mt-10 text-base-300  ">
                      
                              <div  className='static ' >
                                    <figure className='h-72'><img src={img} alt={name} /></figure>

                                    <div className="badge badge-error text-white mt-1 font-bold 4 absolute top-1/2" >Supplyer:{supplyer}</div>
                              </div>
                      


                        <div className="card-body">

                              <div className='flex justify-between text-xl text-primary font-semibold'>
                                    <h2 >
                                          {name}

                                    </h2>
                                    <div>
                                    Price: <button className='text-xl text-white p-1 btn-success rounded'> ${price}</button>
                                          
                                    </div>
                              </div>

                              <p>{description}</p>
                              <div className="card-actions justify-end">

                                    <div className="badge badge-error text-white  font-bold">Available:{quantity}</div>

                                    <button onClick={()=>updateItem(_id)} className="badge
                                     badge-warning text-white font-bold" >Update</button>                                  

                              </div>
                              
                        </div>
                  </div>
                  
            </div>
      );
};

export default Inventory;