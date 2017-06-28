var React = require('react');

import {getClient} from '../services/contentfulClient';

import Gallery from './Gallery';
import Text from './Text';

var Project = React.createClass({
  getInitialState: function () {
    return {
      description: {}
    };
  },

  componentWillMount: function () {
    getClient().getEntries({
      content_type: 'description',
      order: '-sys.updatedAt'
    })
      .then(description => {
        this.setState({
          description: description.items[0].fields
        });
      });
  },

  render: function () {
    return (
      <div>
        <Gallery />
        <Text text={this.state.description.text} />
      </div>
    )
  }
});

module.exports = Project;
