'use strict';

import React from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import Routing from './components/Routing';
import { AppContainer } from 'react-hot-loader';

// CSS
require('./styles/style.scss');

// polyfills
require('./lib/localStorageExtension');
require('extensible-polyfill').patch('immutable')
require('es6-promise').polyfill();

render(
  <Routing stores={window.fluxStores}/>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Routing', () => {
    const NextRouting = require('./components/Routing').default;
    render(
      <AppContainer>
        <NextRouting/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}