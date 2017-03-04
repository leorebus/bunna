var React = require('react');

import {getClient} from '../services/contentfulClient';

var Project = React.createClass({
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
      <div className="l-vl">
        <div className="doormat l-vl__flexel"></div>
        <pre className="project__description l-row l-vl__fixel">
        {this.state.description.text}
        </pre>
      </div>
    )
  }
});

module.exports = Project;