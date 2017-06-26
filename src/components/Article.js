var React = require('react');

import {getClient} from '../services/contentfulClient';
import Text from './Text';
import FormattedDate from './FormattedDate';

var Article = React.createClass({
  getInitialState: function () {
    return {
      text: undefined
    };
  },

  componentWillMount: function () {
    getClient().getEntry(this.props.params.articleId)
    .then(entry => {
      this.setState({
        text: entry.fields.content,
        title: entry.fields.title,
        date: entry.fields.date
      });
    });
  },

  render: function () {
    return (
      <div>
        <div className="article__header">
          <h2 className="title">{this.state.title}</h2>
          <div>Pubblicato il: <FormattedDate date={this.state.date} /></div>
        </div>
        <div className="project__description">
          <Text text={this.state.text} />
        </div>
      </div>
    )
  }
});

module.exports = Article;
