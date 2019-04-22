import React, { Component } from 'react';
import Cloud from '../../views/Cloud/Cloud';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAction,closeAction } from '../../../redux/action';
import './Home.scss';

class Home extends Component {
  constructor(props){
    super(props)
    this.props.changeAction('Home');
  }
  componentWillUnmount() {
    this.props.closeAction();
  }
  render() {
    return (
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
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ closeAction,changeAction }, dispatch);
}

function mapStateToProps(store) {
  return {};
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Home);
