var React = require('react');

import {Link} from 'react-router';

var Header = React.createClass({

  getInitialState: function () {
    return {
      flagUrl: "img/" + this.props.lang
    };
  },

  componentDidUpdate(prevProps) {
    if (this.props.lang !== prevProps.lang) {
      this.setState({flagUrl: "img/" + this.props.lang})
    }
  },

  render: function () {
    return (
      <div className="header">
        <Link className="header__logo" to="/" />
        <Link className="header__title hidden-mb" to="/">
          <span className="header__name">No early marriage</span>
          <div className="header__tigrinya-name"></div>
          <span className="header__name">No al matrimonio precoce</span>
        </Link>
        <div className="header__contact">
          {this.state.flagUrl}
          <Link to="/contatti" className="call-to-action call-to-action--larger-mb">Info</Link>
        </div>
      </div>
    )
  }
});

module.exports = Header;
