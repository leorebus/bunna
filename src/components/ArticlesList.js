var React = require('react');

import {getClient} from '../services/contentfulClient';
import {Link} from 'react-router';

var ArticlesList = React.createClass({
  getInitialState: function () {
    return {
      entries: []
    };
  },

  componentWillMount: function () {
    getClient().getEntries({
      content_type: 'blogPost',
      order: '-fields.date'
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
      <div className="column l-row__col">
        <h2 className="column__title">Ultime notizie</h2>
        <ul>
          {this.state.entries.map(function (entry) {
            let fields = entry.fields;
            return <li>{fields.title}</li>;
          })}
        </ul>
        <Link to="/news">Leggi tutti i report</Link>
      </div>
    )
  }
});

module.exports = ArticlesList;