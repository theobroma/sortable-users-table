import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';

import './styles/index.scss';
import MainApp from './containers/MainApp';

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);
