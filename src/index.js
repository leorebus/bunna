import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import News from './components/News';
import Support from './components/Support';
import Article from './components/Article';
import Diary from './components/Diary';
import Project from './components/Project';
import Video from './components/Video';

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
            <Route path="news/:articleId" component={Article} />
            <Route path="diario" component={News} />
            <Route path="diario/:articleId" component={Diary} />
            <Route path="progetto" component={Project} />
            <Route path="progetto/:lang" component={Project} />
            <Route path="contatti" component={Support} />
            <Route path="video" component={Video} />
          </Route>
        </Router>,
        document.getElementById('app')
      );
    }
  );
});
