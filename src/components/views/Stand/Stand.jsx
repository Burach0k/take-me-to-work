import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Stand.scss';

const Stand = () => (
  <div id='stand'>
    <img src='../../../img/table.png'></img>
    <a href='https://github.com/rolling-scopes/school/blob/gh-pages/2018Q3/Andrey_Burak.pdf' target='_blank'>
      <div id='certificate'>
        <div className='certificate-line' />
        2019
        <div className='certificate-line' />
        <p>«JavaScript/Front-end»</p>
        <FontAwesomeIcon id='stamp' icon='certificate' />
        <FontAwesomeIcon id='bookmark' icon='bookmark' />
      </div>
    </a>
  </div>
);

export default Stand;
