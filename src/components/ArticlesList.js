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
      <div className="column l-col">
        <h2 className="column__title">Ultime notizie</h2>
        <ul>
          {this.state.entries.map(function (entry) {
            let fields = entry.fields;
            return <li>{fields.title}</li>;
          })}
        </ul>
      </div>
    )
  }
});

module.exports = ArticlesList;