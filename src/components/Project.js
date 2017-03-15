var React = require('react');

import {getClient} from '../services/contentfulClient';
import Text from './Text';

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
        <div className="project__description l-vl__fixel">
          <Text text={this.state.description.text} />
        </div>
      </div>
    )
  }
});

module.exports = Project;
