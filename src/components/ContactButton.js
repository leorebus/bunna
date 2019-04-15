// contact button links to support page in italian, sends an email in english

var React = require('react');

import {Link} from 'react-router';
import EmailLink from './EmailLink';

var ContactButton = React.createClass({

  getClassName: function () {
    return "call-to-action" + (this.props.extraClass ? " " + this.props.extraClass : "");
  },

  render: function () {
    return (
      <div>
      {this.props.lang !== 'en' &&
        <Link to="/contatti" className={this.getClassName()}>{this.props.text || 'Contatta'}</Link>
      }
      {this.props.lang === 'en' &&
        <EmailLink text="Contact us" classes={this.getClassName()} />
      }
      </div>
    )
  }
});

module.exports = ContactButton;
