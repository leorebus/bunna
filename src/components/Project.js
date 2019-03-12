var React = require('react');

import {getClient} from '../services/contentfulClient';
import {Link} from 'react-router';
import ContactButton from './ContactButton';

import Gallery from './Gallery';
import Text from './Text';

var Project = React.createClass({
  getInitialState: function () {
    return {
      description: {}
    };
  },

  componentWillMount: function () {
    this.fetchText();
  },

  componentDidUpdate: function (prevProps) {
    if (this.props.params.lang !== prevProps.params.lang) {
      this.fetchText();
    }
  },

  fetchText: function () {
    getClient().getEntries({
      content_type: 'description',
      order: '-sys.updatedAt',
      locale: this.props.params.lang,
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
      <div className={this.props.params.lang}>
        <Gallery />
        <Text text={this.state.description.text} />
        {this.state.description.text && this.props.params.lang !== 'en' &&
          <Link to="/contatti" className="call-to-action call-to-action--end-of-page">Sostieni</Link>
        }
        {this.state.description.text && this.props.params.lang === 'en' &&
          <ContactButton text="Contact us!" classes="call-to-action call-to-action--end-of-page" />
        }
      </div>
    )
  }
});

module.exports = Project;
