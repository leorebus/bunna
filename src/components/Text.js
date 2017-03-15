var React = require('react');

import {getClient} from '../services/contentfulClient';

var Article = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  renderText: function () {
    if (!this.props.text) return;
    var paragraphs = this.props.text.split('\n').filter(String);
    return paragraphs.map(function(p, key){
      return <p className="article__p">{p}</p>;
    });
  },

  render: function () {
    return (
      <article className="article">
        {this.renderText()}
      </article>
    )
  }
});

module.exports = Article;
