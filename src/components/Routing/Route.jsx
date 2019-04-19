import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import About from '../controlls/About/About'
import Header from '../views/Header/Header'
import Work from '../controlls/Work/Work'
import Home from '../../components/controlls/Home/Home'
const Routing = () => (
  <BrowserRouter>
    {/* <Route component={Header} /> */}
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/work' component={Work} />
</BrowserRouter>
);

export default Routing;
