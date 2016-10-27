import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {initClient} from './services/contentfulClient';

document.addEventListener('DOMContentLoaded', function() {
  initClient()
    .then(
      () => {
        ReactDOM.render(
          <Home />,
          document.getElementById('app')
        );
      }
    );
});