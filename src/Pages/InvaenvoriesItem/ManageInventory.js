import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../Hooks/useInventory';



const ManageInventory = ({ car }) => {
      const [cars,setCars] = useInventory([]);
      const { name, description, img, price, quantity,delivered, supplyer,_id } = car;
     const navigate = useNavigate()

      const handleRemove =(id)=>{
            // delete api
            const deleted = window.confirm('are you sure to delete') 
               if(deleted){
                  const url = `http://localhost:5000/inventory/${_id}`;
                  fetch(url,{
                        method:'DELETE',     
                  })
                  .then(res=>res.json())
                  .then(data=>{
                        console.log(data)
                        if(data.deletedCount){
                              console.log("deleted")
                              const remaining = cars.filter(car=>car._id !==_id)
                              toast.success("Deleted Successfully!")
                              setCars(remaining)
                        }
                  })
               }            
      }
       const handleUpdate = id =>{
            navigate(`/update/${_id}`)
       }
      return (
            <div>
                  <div className="card  bg-transparent border shadow-xl text-base-300">
                        <div className='static'>
                              <figure className='h-72'><img src={img} alt={name} /></figure>

                              <div className="badge badge-info text-white mt-1 font-bold 4 absolute top-1/2" >Supplyer:{supplyer}</div>
                        </div>

                        <div className="card-body">

                              <div className='flex justify-between text-xl text-primary font-semibold'>
                                    <h2 >
                                          {name}

                                    </h2>
                                    <div>
                                          Price: <button className='btn btn-success text-xl font-semibold text-white pt-1 pb-1 rounded-xl'>${price}</button>
                                    </div>
                              </div>

                              <div className='flex justify-evenly text-white'>
                                    <div >
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                                                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
                                          </svg>

                                          <small className='text-success font-semibold'>{supplyer}</small>

                                    </div>
                                    <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                          </svg>

                                          <small className='text-success font-semibold'>Available: {quantity}</small>

                                    </div>
                                    <div>
                                          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                          </svg>
                                          <small className='text-success font-semibold'>Delivered: {delivered}</small>
                                    </div>
                              </div>

                              <p>{description}</p>
                              <div className="card-actions justify-end">

                                    <button onClick={()=>handleUpdate(_id)} className='badge badge-warning rounded-xl text-white font-bold' >Update</button>
                                    
                                    <button  onClick={()=>handleRemove(_id)} className='badge badge-error rounded-xl text-white font-bold'>Remove <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-4">
                                          <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                    </svg>
                                    </button>


                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ManageInventory;