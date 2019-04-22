import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAction, closeAction } from '../../../redux/action';
import './Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.props.changeAction('Work');
  }
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
  return bindActionCreators({ closeAction, changeAction }, dispatch);
}

function mapStateToProps(store) {
  console.log(store);
  return {};
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Work);
