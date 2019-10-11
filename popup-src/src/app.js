import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Component from './component';
import { init } from './db';

(async () => {
  await init();

  render(
    <Component />,
    global.document.getElementById('root'),
  );
})();
