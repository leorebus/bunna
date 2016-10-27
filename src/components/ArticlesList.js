var React = require('react');

import {getClient} from '../services/contentfulClient';

var ArticlesList = React.createClass({
  getInitialState: function () {
    return {
      entries: []
    };
  },

  componentWillMount: function () {
    getClient().getEntries({
      content_type: 'blogPost'
    })
      .then(entries => {
        this.setState({
          entries: entries.items
        });
      });
  },

  componentDidUpdate: function (prevProps, prevState) {
  },

  render: function () {
    return (
      <ul>
        {this.state.entries.map(function (entry) {
          var fields = entry.fields;
          return <li>{fields.title}</li>;
        })}
      </ul>
    )
  }
});

module.exports = ArticlesList;