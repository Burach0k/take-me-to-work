import React from 'react';
import './Home.scss';

const Home = () => (
  <div className='container'>
    <img src='../../../img/small-cloud.png' id = 'small-cloud' />
    <img src='../../../img/big-cloud.png' id = 'big-cloud' />

    <div className='bird-container bird-container--one'>
      <div className='bird bird--one' />
    </div>

    <div className='bird-container bird-container--two'>
      <div className='bird bird--two' />
    </div>

    <div className='bird-container bird-container--three'>
      <div className='bird bird--three' />
    </div>

    <h1>Hello! I'm Andrey.</h1>
    <h2>Front-End developer</h2>
  </div>
);

export default Home;
