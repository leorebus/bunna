var React = require('react');

import {getClient} from '../services/contentfulClient';
import {Link} from 'react-router';

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
      order: '-sys.updatedAt',
      limit: 1
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
        {this.state.description.text &&
          <Link to="/contatti" className="call-to-action call-to-action--end-of-page">Sostieni</Link>
        }
      </div>
    )
  }
});

module.exports = Project;
