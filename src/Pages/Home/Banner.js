import React from 'react';
import oneLight from '../../assets/images/oneLight.jpg'

const Banner = () => {
      return (

            <div class="hero sm:min-w-full  lg:min-h-screen" style={{backgroundImage: `url(${oneLight})`}}>
                  <div className="hero-overlay bg-opacity-10"></div>
                  <div className="hero-content text-neutral-content">
                        <div className=" mb-14 lg:ml-24 text-secondary ">
                              <h1 className="mb-3 text-4xl font-bold">Build Your Trade</h1>

                              <h1 className="mb-3 mr-28 text-5xl font-bold">With</h1>

                              <h1 className="mb-3 -mr-5 text-4xl font-bold">Next Gear</h1>


                        </div>
                  </div>
            </div>

      );
};

export default Banner;