import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => (
  <div id = 'header'>
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/work'>Work</Link>
      </li>
      <li>
        <Link to='/end'>End</Link>
      </li>
    </ul>
  </div>
);

export default Header;
