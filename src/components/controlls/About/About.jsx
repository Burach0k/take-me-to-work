import React, { Component } from 'react';
import Cloud from '../../views/Cloud/Cloud';
import Stand from '../../views/Stand/Stand';
import Sheeps from '../../views/Sheeps/Sheeps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAction, closeAction } from '../../../redux/action';
import './About.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends Component {
  constructor(props){
    super(props)
  }
  componentWillUnmount(){
   this.props.closeAction();
  }

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


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ closeAction }, dispatch);
}

function mapStateToProps(store) {
  return { };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(About);

