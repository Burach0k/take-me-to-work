import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAction, closeAction } from '../../../redux/action';
import './Section.scss';

class Section extends Component {
  constructor(props) {
    super(props);
    this.open = 'section is-expanded';
    this.close = 'section';
    this.currentClass = this.props.class[this.props.name];
  }

  setPropagation() {
    if(this.props.class[this.props.name] === this.close) this.props.changeAction(this.props.name);
    if(this.props.class[this.props.name] === this.open) this.props.closeAction(this.props.name);
  }
  closePropagation() {
  }

  render() {
    return (
      <section onClick={this.setPropagation.bind(this)} className={this.props.class[this.props.name]}>
        <Link to='/'>
          <div onClick={this.setPropagation.bind(this)} className='close-section'>
            &times;
          </div>
        </Link>
        <Link to={this.props.link}>
          <div className='demo-box'>{this.props.name}</div>
        </Link>
      </section>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeAction, closeAction }, dispatch);
}

function mapStateToProps(store) {
  return {
    class: store.class,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Section);
