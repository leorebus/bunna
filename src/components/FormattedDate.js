var React = require('react');

var FormattedDate = React.createClass({

  propTypes: {
    date: React.PropTypes.string
  },

  render: function () {
    if (!this.props.date) {
      return <p>Caricamento...</p>;
    }
    var date = new Date(this.props.date);
    return (
      <span>
        {!this.props.short &&
          date.getDate() + '/'
        }
        {(date.getMonth() + 1) + '/' + date.getFullYear()}
      </span>
    )
  }
});

module.exports = FormattedDate;
