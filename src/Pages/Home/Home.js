import React from 'react';
import Cars from '../Cars';

import Banner from './Banner';
import Deal from './Deal';
import Features from './Features';
const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Cars></Cars>
                  <Features></Features>
                  <Deal></Deal>
            </div>
      );
};

export default Home;