import React from 'react';
import Cloud from '../../views/Cloud/Cloud'
import './Home.scss';

const Home = () => (
  <div className='container'>
    <Cloud />
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
