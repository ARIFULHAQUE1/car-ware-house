import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
      const { register, handleSubmit,  formState: { errors } } = useForm();
      const onSubmit = data => {
            const url="http://localhost:5000/inventory"
            fetch(url,{
               method: "POST",
               headers:{
                  'Content-Type': 'application/json'
               },
               body:JSON.stringify(data)   
            })
            console.log(data)
            
      };
     
      return (
     

                  <div className=' bg-white shadow-2xl mt-5 mb-5 w-2/4 mx-auto rounded-md '>
                  <h1 className='text-2xl font-bold text-center text-success px-2 mt-2'>Add new item</h1>

                        <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>
                              <input className='input-success mb-2 mt-5 p-2 w-full  border border-success rounded-md' type="text" {...register("name", { required: "car Name is required" })}  placeholder='Car Name' />
                              <span className='text-error'>{errors.name?.message}</span>
                              <br />
                              <input className='input-success  mb-2 p-2 w-full border border-success rounded-md' type="text" {...register("supplyer", { required: "Supplyer Name is required" })}  placeholder='Supplyer Name' />
                              <span className='text-error'>{errors.supplyer?.message}</span>
                              <br />
                              <input className='input-success  mb-2 p-2 w-full border border-success rounded-md' type="number" {...register("price", { required: "Price must be > '30000'", min:30000 })}  placeholder='Enter Price' />
                              <span className='text-error'>{errors.price?.message}</span>
                              <br />
                              <input className='input-success  mb-2 p-2 w-full border border-success rounded-md' type="number" {...register("quantity", { required: "Minimum Quantity '1' ",min:1 })}  placeholder='Enter Quantity' />
                              <span className='text-error'>{errors.quantity?.message}</span>
                              <br />
                              <input className='input-success  mb-2 p-2 w-full border border-success rounded-md' type="number" {...register("delivered", { required: "Delivered Quantity Minimum '0' ",min:0 })}  placeholder='Enter Delivered Quantity' />
                              <span className='text-error'>{errors.delivered?.message}</span>
                              <br />
                              <input className='input-success  mb-2 p-2 w-full border border-success rounded-md' type="text" {...register("img", { required: "Photo Url is required"})}  placeholder='Photo Url' />
                              <span className='text-error'>{errors.img?.message}</span>
                              <br />
                              <textarea className='textarea-success border border-success mb-2 p-2 w-full rounded-md' {...register("description", { required: "Text must be '114' Character ", maxLength: 114, minLength:114  })} placeholder="Description"  cols="30" rows="3"></textarea>
                              <span className='text-error'>{errors.description?.message}</span>
                              <br />
                              <div className='flex justify-center'>
                              <input className='btn btn-success text-white w-full lg:w-60 mb-5' type="submit" value={'Submit'}/>
                              </div>
                           
                        </form>
                  </div>
           
      );
};

export default AddItem;