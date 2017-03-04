var React = require('react');

import Header from './Header';

var App = React.createClass({

  render: function () {
    return (
      <div className="l-vl l-vl--page">
        <Header />
        <section className="content l-vl__flexel">
          {this.props.children}
        </section>
      </div>
    )
  }
});

module.exports = App;