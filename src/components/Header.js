var React = require('react');

var Header = React.createClass({
  getInitialState: function () {
    return {
      description: {}
    };
  },

  render: function () {
    return (
      <header className="header l-vl__fixel">
        <div className="header__logo"></div>
        <div className="header__title">
          <span className="header__name">No early marriage</span>
          <span className="header__name">No al matrimonio precoce</span>
        </div>
        <div className="header__calltoaction">Contatta</div>
      </header>
    )
  }
});

module.exports = Header;