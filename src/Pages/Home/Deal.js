import React from 'react';
import deal from '../../assets/images/deal.jpg'
const Deal = () => {
      return (
            <div>
                  <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img className='sm:w-screen lg:w-1/2' src={deal}/>
    <div>
      <h1 class="text-5xl font-bold">Make a Deal With Us!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn bg-accent border-0">Make Deal</button>
    </div>
  </div>
</div>
            </div>
      );
};

export default Deal;