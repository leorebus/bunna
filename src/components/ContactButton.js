var React = require('react');

var contactAddress = ['mariaadele.signorini', 'unifi.it'].join('@');

var Header = React.createClass({

  handleClick (event) {
    event.preventDefault();
    const { email, headers } = this.props;
    window.location.href = 'mailto:' + contactAddress + '?subject=No+Early+Marriage';
  },

  render: function () {
    return (
      <a onClick={this.handleClick} href="mailto:contact" className="call-to-action call-to-action--larger-mb">Contatta</a>
    )
  }
});

module.exports = Header;
