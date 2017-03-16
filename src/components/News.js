var React = require('react');

import ArticlesList from './ArticlesList';

var News = React.createClass({

  render: function () {
    return (
      <div className="project__description">
        <ArticlesList />
      </div>
    )
  }
});

module.exports = News;
