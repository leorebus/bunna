var React = require('react');

import Header from './components/Header';
import Description from './components/Description';
import ArticlesList from './components/ArticlesList';

var Home = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <div className="doormat"></div>
        <div className="l-row">
          <ArticlesList />
          <Description />
        </div>
      </div>
    )
  }
});

module.exports = Home;