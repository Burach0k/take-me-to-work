import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

/* global  it expect :true */
/* eslint no-undef: "error" */

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
