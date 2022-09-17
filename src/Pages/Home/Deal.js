import React from 'react';
import deal from '../../assets/images/deal.jpg'
const Deal = () => {
      return (
            <div>
                  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='sm:w-screen lg:w-1/2' src={deal} alt=" two person making Deal"/>
    <div>
      <h1 className="text-5xl font-bold">Make a Deal With Us!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-yellow-400 border-0 text-white">Make Deal</button>
    </div>
  </div>
</div>
            </div>
      );
};

export default Deal;