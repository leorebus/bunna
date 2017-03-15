var React = require('react');

import ContactButton from './ContactButton';
import {Link} from 'react-router';

var Header = React.createClass({

  render: function () {
    return (
      <header className="header l-vl__fixel">
        <Link className="header__logo" to="/" />
        <Link className="header__title hidden-mb" to="/">
          <span className="header__name">No early marriage</span>
          <span className="header__name--variant">No al matrimonio precoce</span>
        </Link>
        <div className="header__contact">
          <ContactButton />
        </div>
      </header>
    )
  }
});

module.exports = Header;
