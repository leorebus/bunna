var React = require('react');

import {Link} from 'react-router';

const flagClassRoot = "header__flag"

var Header = React.createClass({

  getFlagClass: function () {
    return flagClassRoot + "--" + this.state.flag;
  },

  getFlagLink: function () {
    return "/progetto" + (this.props.flag === 'en' ? '/en' : '')
  },

  getInitialState: function () {
    return {
      flag: this.props.flag
    };
  },

  componentDidUpdate(prevProps) {
    if (this.props.flag !== prevProps.flag) {
      this.setState({flag: this.props.flag})
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
          {this.state.flag === 'en' && // show link to contatti only in the italian version (i.e. english flag is showing)
            <Link to="/contatti" className="call-to-action">Contatta</Link>
          }
          <Link to={this.getFlagLink()} className={"header__flag " + this.getFlagClass()}></Link>
        </div>
      </div>
    )
  }
});

module.exports = Header;
