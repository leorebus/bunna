var React = require('react');

import Description from './Description';
import ArticlesList from './ArticlesList';

var Home = React.createClass({

  render: function () {
    return (
      <div>
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