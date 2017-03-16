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
    return (
      <ul>
        {this.state.entries.map(function (entry) {
          var date = new Date(entry.fields.date);
          return <li>[{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}] <Link to={"/news/" + entry.sys.id}>{entry.fields.title}</Link></li>;
        })}
      </ul>
    )
  }
});

module.exports = ArticlesList;
