import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAction, closeAction } from '../../../redux/action';
import './Work.scss';

class Work extends Component {
  componentWillUnmount() {
    this.props.closeAction();
  }
  render() {
    return (
      <div id='work'>
        <h1>Work</h1>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ closeAction }, dispatch);
}

function mapStateToProps(store) {
  return {};
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Work);
