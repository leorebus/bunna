var React = require('react');

import ArticlesList from './ArticlesList';

var News = React.createClass({

  render: function () {
    return (
      <div className="text">
        <h2 className="title">Archivio</h2>
        {(this.props.route.path === 'news') ? (
          <ArticlesList />
        ) : (
          <ArticlesList type={this.props.route.path} dateShort={true} />
        )}
      </div>
    )
  }
});

module.exports = News;
