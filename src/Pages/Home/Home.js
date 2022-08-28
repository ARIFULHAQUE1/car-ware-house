import React from 'react';
import Inventorys from '../InvaenvoriesItem/Inventorys';

import Banner from './Banner';
import Deal from './Deal';
import Features from './Features';
const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                 <Inventorys></Inventorys>
                  <Features></Features>
                  <Deal></Deal>
            </div>
      );
};

export default Home;