var React = require('react');

import Header from './components/Header';
import ArticlesList from './components/ArticlesList';

var Home = React.createClass({

  componentWillMount: function () {
  },

  componentDidUpdate: function (prevProps, prevState) {
  },

  render: function () {
    return (
      <div>
        <Header />
        <ArticlesList />
      </div>
    )
  }
});

module.exports = Home;