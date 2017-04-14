var React = require('react');

var FormattedDate = React.createClass({

  propTypes: {
    date: React.PropTypes.string
  },

  render: function () {
    var date = new Date(this.props.date);
    return (
      <span>
        {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
      </span>
    )
  }
});

module.exports = FormattedDate;
