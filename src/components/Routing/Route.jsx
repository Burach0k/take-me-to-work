import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import About from '../controlls/About/About';
import Header from '../views/Header/Header';
import Work from '../controlls/Work/Work';
import Home from '../controlls/Home/Home';
import Main from '../controlls/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCertificate, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faCertificate, faBookmark);

const Routing = () => (
  <Provider store={store}>
    <BrowserRouter>
      {/* <Route component={Header} /> */}
      <Route path='/' component={Main} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/work' component={Work} />
    </BrowserRouter>
  </Provider>
);

export default Routing;
