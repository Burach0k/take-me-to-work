import React, { Component } from 'react';
import Section from '../../views/Section/Section';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Section name='Home' link='/home' />
        <Section name='About' link='/about' />
        <Section name='Work' link='/work' />
        <Section name='End' link='/end' />
      </div>
    );
  }
}

export default Main;
