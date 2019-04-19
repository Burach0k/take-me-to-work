import React, { Component } from 'react';
import './CreateArticle.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { serId, changeArticlesPage, changeCurrentPage } from '../../../redux/action';
import fetchPars from './fetchPars';

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  create() {
    const title = document.getElementById('title-article');
    const body = document.getElementById('body-article');
    const bodyMessage = document.getElementById('body-message');
    const titleMessage = document.getElementById('title-message');
    const params = { title: title.value, body: body.value };
    const id = this.props.id;

    bodyMessage.style.visibility = 'hidden';
    titleMessage.style.visibility = 'hidden';

    if (this.props.location.pathname === '/articles/create')
      fetchPars('http://localhost:8080/v1/articles', params, 'POST')
        .then((req) => {
          if (req.status === 200) {
            this.setState({ redirect: true });
            this.props.changeArticlesPage(JSON.parse(req.statusText));
          }
        })
        .catch(console.log);
    else
      fetchPars(`http://localhost:8080/v1/articles/${id}`, params, 'PUT')
        .then((req) => {
          if (req.status === 200) {
            this.setState({ redirect: true });
            this.props.changeCurrentPage({
              article: JSON.parse(req.statusText),
              page: this.props.page,
            });
          }
        })
        .catch(console.log);
  }

  render() {
    let state;
    if (this.props.location.pathname === '/articles/create') {
      state = 'create';
    } else {
      state = 'edit';
    }
    if (this.state.redirect) {
      return <Redirect to='/articles' />;
    }

    return (
      <Form id='form-create'>
        <h2>Article / {state}</h2>

        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' id='title-article' />
          <Form.Text id='title-message' className='text-muted'>
            Title is required!
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control type='text' id='body-article' />
        </Form.Group>

        <Form.Text id='body-message' className='text-muted'>
          Body is required!
        </Form.Text>

        <Button onClick={this.create.bind(this)} variant='outline-primary'>
          {state}
        </Button>

        <Link to='/articles'>
          <Button variant='outline-primary'>cancel</Button>
        </Link>
      </Form>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ serId, changeArticlesPage, changeCurrentPage }, dispatch);
}

function mapStateToProps(store) {
  return {
    id: store.currentId,
    page: store.currentPage,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CreateArticle);
