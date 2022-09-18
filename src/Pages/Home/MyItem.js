import React from 'react';

const MyItem = () => {
      return (
            <div className='bg-secondary'>
                  <h1>This is my item</h1>
                  <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>
          <label>
            
          </label>
        </th>
        <th>Name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>
          <label>
            
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>

        <td>Purple</td>
        <th>
          <button className="btn btn-error text-white">Delete</button>
        </th>
      </tr>
  
     
    </tbody>
    
    
  </table>
</div>
            </div>
      );
};

export default MyItem;