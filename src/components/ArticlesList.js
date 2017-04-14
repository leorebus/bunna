var React = require('react');

import {getClient} from '../services/contentfulClient';
import {Link} from 'react-router';
import FormattedDate from './FormattedDate';

var ArticlesList = React.createClass({
  getInitialState: function () {
    return {
      entries: []
    };
  },

  componentWillMount: function () {
    getClient().getEntries({
      content_type: 'blogPost',
      select: 'fields.title,fields.date,sys.id',
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
    if (this.state.entries.length === 0) return (<div>Caricamento..</div>);
    return (
      <ul>
        {this.state.entries.map(function (entry) {
          return <li>[<FormattedDate date={entry.fields.date} />] <Link to={"/news/" + entry.sys.id}>{entry.fields.title}</Link></li>;
        })}
      </ul>
    )
  }
});

module.exports = ArticlesList;
