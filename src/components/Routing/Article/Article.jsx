import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateArticle from '../../controlls/CreateArticle/CreateArticle';
import ArticlePage from '../ArticlePage/ArticlePage';

const Artile = () => (
  <Switch>
    <Route exact path='/articles' component={ArticlePage} />
    <Route exact path={['/articles/create', '/articles/:id/edit']} component={CreateArticle} />
  </Switch>
);

export default Artile;
