var React = require('react');

import ContactButton from './ContactButton';
import {Link} from 'react-router';

var Header = React.createClass({

  render: function () {
    return (
      <div className="header">
        <Link className="header__logo" to="/" />
        <Link className="header__title hidden-mb" to="/">
          <span className="header__name">No early marriage</span>
          <span className="header__name--variant">No al matrimonio precoce</span>
        </Link>
        <div className="header__contact">
          <ContactButton />
        </div>
      </div>
    )
  }
});

module.exports = Header;
