var React = require('react');

import ArticlesList from './ArticlesList';

var News = React.createClass({

  render: function () {
    return (
      <div className="text">
        <h2 className="title">Archivio notizie</h2>
        <ArticlesList />
      </div>
    )
  }
});

module.exports = News;
