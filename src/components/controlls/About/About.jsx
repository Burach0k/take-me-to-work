import React, { Component } from 'react';
import Cloud from '../../views/Cloud/Cloud';
import Stand from '../../views/Stand/Stand';
import Sheeps from '../../views/Sheeps/Sheeps';
import './About.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName='example'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className='about'>
          <div id='earth' />
          <Cloud />
          <h2>
            I graduated from the
            <a href='https://rs.school/' target='_blank'>
              Rolling Scopes School
            </a>
            courses and now now I'm looking for a job.
          </h2>
          <Stand />
          <Sheeps />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default About;
