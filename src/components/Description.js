var React = require('react');

import {getClient} from '../services/contentfulClient';

var Description = React.createClass({
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
      <div className="column l-col">
        <h2 className="column__title">Il progetto</h2>
        <div>{this.state.description.text}</div>
      </div>
    )
  }
});

module.exports = Description;