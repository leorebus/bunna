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

  getType: function () {
    return this.props.type || 'news';
  },

  getContent: function () {
    var type = this.getType();
    if (type === 'news') return 'blogPost';
    return type;
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
      content_type: this.getContent(),
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
    if (this.state.entries.length === 0) return (<div className="loading-dots">Caricamento</div>);
    return (
      <div>
        <ul>
          {this.state.entries.map((entry, key) => {
            return <li key={key}><FormattedDate date={entry.fields.date} short={this.props.dateShort || false} /> - <Link to={"/"+ this.getType() + "/" + entry.sys.id}>{entry.fields.title}</Link></li>;
          })}
        </ul>
        {this.state.showMore &&
          <Link to={'/' + this.getType()}>[Archivio]</Link>
        }
      </div>
    )
  }
});

module.exports = ArticlesList;
