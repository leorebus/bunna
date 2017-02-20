import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Home';
import News from './components/News';

import {initClient} from './services/contentfulClient';

document.addEventListener('DOMContentLoaded', function() {
  initClient()
    .then(
      () => {
        ReactDOM.render(
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="news" component={News} />
            </Route>
          </Router>,
          document.getElementById('app')
        );
      }
    );
});