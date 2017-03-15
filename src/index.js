import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import News from './components/News';
import Project from './components/Project';

import './styles/main.scss';

import {initClient} from './services/contentfulClient';

document.addEventListener('DOMContentLoaded', function() {
  initClient()
    .then(
      () => {
        ReactDOM.render(
          <Router history={hashHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="news" component={News} />
              <Route path="progetto" component={Project} />
            </Route>
          </Router>,
          document.getElementById('app')
        );
      }
    );
});
