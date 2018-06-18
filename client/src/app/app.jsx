import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import MainApp from './containers/MainApp';
import configureStore from './configureStore';

const store = configureStore();
render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);
