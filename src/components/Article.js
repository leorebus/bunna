var React = require('react');

import {getClient} from '../services/contentfulClient';
import Text from './Text';

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
          text: entry.fields.content
        });
      });
  },

  render: function () {
    return (
      <div className="project__description">
        <Text text={this.state.text} />
      </div>
    )
  }
});

module.exports = Article;
