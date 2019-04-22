import React from 'react';
import './Sheep.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Sheep = (props) => (
  <ReactCSSTransitionGroup
  transitionName='example'
  // transitionAppear={true}
  // transitionAppearTimeout={500}
  transitionEnterTimeout={1000}
  transitionLeaveTimeout={1000}>
  
  <div className={'sheep-container' + props.index}>
    <div className='eye-container'>
      <div className={'sheep-eye' + props.index} />
    </div>
    <img className={'sheep' + props.index} src='../../../img/sheep4.png' />
  </div>
  </ReactCSSTransitionGroup>
);

export default Sheep;
