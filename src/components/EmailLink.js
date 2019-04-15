var React = require('react');

var contactAddress = ['info', ['noearlymarriage', 'org'].join('.')].join('@');

var EmailLink = React.createClass({

  handleClick (event) {
    event.preventDefault();
    const { email, headers } = this.props;
    window.location.href = 'mailto:' + contactAddress;
  },

  render: function () {
    return (
      <a onClick={this.handleClick} href="mailto:contact" className={this.props.classes} alt='Contatta'>
        {this.props.text || 'Contatta'}
      </a>
    )
  }
});

module.exports = EmailLink;
