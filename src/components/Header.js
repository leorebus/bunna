var React = require('react');

import {getClient} from '../services/contentfulClient';

var Header = React.createClass({
  getInitialState: function () {
    return {
      description: {}
    };
  },

  componentWillMount: function () {
    getClient().getEntries({
      content_type: 'description'
    })
      .then(description => {
        this.setState({
          description: description.items[0].fields
        });
      });
  },

  componentDidUpdate: function (prevProps, prevState) {
  },

  render: function () {
    return (
      <header className="header">
        <h1>{this.state.description.title}</h1>
        <div>{this.state.description.text}</div>
      </header>
    )
  }
});

module.exports = Header;