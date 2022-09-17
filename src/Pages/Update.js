import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast} from 'react-toastify';


const Update = () => {
      const [car, setCar] = useState({});
      // const [addQuantity,setAddQuantity]=useState({})

      const [reload, setReload] = useState(true)
      const { name, img, price, quantity, description, supplyer, delivered } = car

      const { _id } = useParams();


      useEffect(() => {
            const url = `http://localhost:5000/inventory/${_id}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setCar(data))
      }, [reload])

      // updated delivered quantity

      const deliveredCar = (id) => {

            let previousDelivered = parseInt(delivered);
            let previousQuantity = parseInt(quantity)
            let totalDelivered = previousDelivered + 1;
            if (previousQuantity > 0) {

                  const updateQuantity = previousQuantity - 1;
                  if (updateQuantity < 1) {
                        totalDelivered = 0
                        console.log(totalDelivered)
                  }

                  console.log(totalDelivered, 'total Delivered')
                  const url = `http://localhost:5000/handleQuantity/${_id}`;
                  fetch(url, {
                        method: 'PUT',
                        headers: {
                              "content-type": "application/json",
                        },
                        body: JSON.stringify({ quantity: updateQuantity, delivered: totalDelivered }),
                  })
                        .then(res => res.json())
                        .then(data => {
                              console.log(data)

                              setReload(!reload)
                        })
            }

      }

      const handleQuantity = event => {

            event.preventDefault();

            let previousQuantity = parseInt(quantity);

            const newQuantity = parseInt(event.target.addQuantity.value);

            if (newQuantity > 0) {

                  const reStockQuantity = previousQuantity + newQuantity;


                  const url = `http://localhost:5000/updateQuantity/${_id}`;
                  fetch(url, {
                        method: 'PUT',
                        headers: {
                              "content-type": "application/json",
                        },
                        body: JSON.stringify({ quantity: reStockQuantity }),
                  })
                        .then(res => res.json())
                        .then(data => {
                        toast.success("Stock Updated Successfully!")
                              setReload(!reload)
                        })



            }
            else {
                  console.log(newQuantity, 'nagitive is not allow')
                  toast.error("negative value is not Allow")
            }
            event.target.reset();


      }



      return (
            <div  >
                  <div className="card w-96 bg-base-100 shadow-2xl  mx-auto  mt-5 mb-5">
                        <figure><img src={img} alt={name} /></figure>
                        <div className="card-body ">
                              <p>ID: <small className='font-light'>{_id}</small></p>
                              <div className='flex justify-between text-xl  font-semibold'>
                                    <h2 >
                                          {name}
                                    </h2>

                                    <div>
                                          Price: <button className='text-xl text-white p-1 btn-warning rounded'> ${price}</button>
                                    </div>
                              </div>
                              <div className='flex justify-between text-success'>
                                    <div >
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                                                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
                                          </svg>
                                          <small className='text-black font-semibold'>{supplyer}</small>

                                    </div>





                                    <div>

                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                          </svg>


                                          {
                                                quantity === 0 ?
                                                      <small className='text-red-800 font-semibold'>Stock Out</small>
                                                      : <small className='text-black font-semibold'>Available:{quantity}</small>



                                          }




                                    </div>
                                    <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                          </svg>

                                          {
                                                quantity === 0 ? <small className='text-red-800  font-semibold'>All Delivered</small>
                                                      :
                                                      <small className='text-black  font-semibold'>Delivered:{delivered}</small>
                                          }

                                    </div>
                              </div>
                              <p>{description}</p>




                              <input type="checkbox" id="restock-modal" className="modal-toggle" />
                              <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                          <label htmlFor="restock-modal" className="btn btn-error  btn-sm btn-circle absolute right-2 top-2 text-white">✕</label>
                                          <h3 className="font-bold text-lg text-success">Enter reStock Quantity</h3>
                                          <form onSubmit={handleQuantity}>

                                                <input name='addQuantity' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2" required />

                                                <div className="modal-action">
                                                      <input type={'submit'} value='Submit' className=" btn btn-success  text-white ml-2" />
                                                </div>
                                          </form>
                                    </div>
                              </div>



                              

                              <div className="card-actions justify-end ">
                                    <button disabled={quantity === 0} onClick={() => deliveredCar(_id)} className="text-white  badge badge-info ">Delivered</button>

                                    <label htmlFor="restock-modal" className="badge badge-success text-white">ReStock</label>

                                   

                              </div>
                        </div>
                  </div>
           
            </div >


      );
};

export default Update;