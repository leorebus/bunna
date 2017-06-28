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

  formatEntries: function (entries) {
    if (!this.props.limit || this.props.limit >= entries.items.length) {
      return entries.items;
    }
    this.setState({
      showMore: true
    });
    return entries.items.slice(0, this.props.limit);
  },

  componentWillMount: function () {
    getClient().getEntries({
      content_type: 'blogPost',
      select: 'fields.title,fields.date,sys.id',
      order: '-fields.date'
    })
      .then(entries => {
        this.setState({
          entries: this.formatEntries(entries)
        });
      });
  },

  render: function () {
    if (this.state.entries.length === 0) return (<div>Caricamento..</div>);
    return (
      <div>
        <ul>
          {this.state.entries.map(function (entry, key) {
            return <li key={key}>[<FormattedDate date={entry.fields.date} />] <Link to={"/news/" + entry.sys.id}>{entry.fields.title}</Link></li>;
          })}
        </ul>
        {this.state.showMore &&
          <Link to='/news'>Archivio notizie</Link>
        }
      </div>
    )
  }
});

module.exports = ArticlesList;
